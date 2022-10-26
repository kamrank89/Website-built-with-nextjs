import Info from "../../../database/models/adminmodel";
import bcrypt from "bcrypt";
import nc from "next-connect";
import dataBaseConnection from "../../../database/connection";
import Token from "../../../database/models/admintoken";
import { getCookies, getCookie, setCookie, deleteCookie } from "cookies-next";

const adminAuthenticatedRouter = nc({
  onNoMatch(req, res) {
    res.statusCode(405), json({ error: `method ${req.method} not allowed` });
  },
});

adminAuthenticatedRouter.get((req, res) => {
  res.send("Hi there this is the admin authentication API!");
});

adminAuthenticatedRouter.post(async (req, res) => {
  dataBaseConnection();
  const verifiedAdmin = await Info.findOne({ username: "admin" });
  const hashedPassword = verifiedAdmin.password;

  const authenticated = bcrypt.compareSync(req.body.password, hashedPassword);
  console.log(authenticated);
  if (authenticated) {
    const newToken = await new Token({
      title: "test",
      body: "test",
    });

    await newToken.save((err) => {
      if (err) {
        console.log(err);
      }
      console.log(`${newToken} has been added to databse`);
    });

    setCookie("tokenId", verifiedAdmin._id, {
      req,
      res,
      maxAge: 1200,
      httpOnly: true,
    });
    // getCookies({ req, res });

    res.redirect("/dashboard");
  }

  res.redirect("/authenticatedadminloginpage");
});

// adminAuthenticatedRouter.delete(async (req, res) => {
//   await dataBaseConnection();
//   Token.findOneAndDelete({ title: "test" }, (err, deleteditem) => {
//     if (err) console.log();
//     console.log(`${deleteditem} has been removed from database`);
//   });
//   res.redirect("/");
// });

export default adminAuthenticatedRouter;
