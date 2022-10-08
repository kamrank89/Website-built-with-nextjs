import dataBaseConnection from "../../../database/connection";
import Info from "../../../database/models/adminmodel";
import nc from "next-connect";
import bcrypt from "bcrypt";
import Token from "../../../database/models/admintoken";

const apiRouterForAdmin = nc({
  onNoMatch(req, res) {
    res.statusCode(405), json({ error: `method ${req.method} not allowed` });
  },
});

apiRouterForAdmin.get((req, res) => {
  res.send("hi there this add admin data API");
});

apiRouterForAdmin.post((req, res) => {
  dataBaseConnection();
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const newAdmin = new Info({
    username: req.body.username,
    password: hash,
  });

  newAdmin.save((err) => {
    if (err) return console.log(err);
    return console.log(`${newAdmin.username} has been added to admin database`);
  });
  console.log(newAdmin);
  res.redirect("/dashboard");
});

apiRouterForAdmin.delete(async (req, res) => {
  dataBaseConnection();
  const adminData = await Token.findOneAndDelete(
    { title: "test" },
    (err, foundItem) => {
      if (err) console.log(err);
      console.log(`${foundItem} has been deleted from database`);
    }
  );
});

export default apiRouterForAdmin;
