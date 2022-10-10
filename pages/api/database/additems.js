import dataBaseConnection from "../../../database/connection";
import Product from "../../../database/models/productmodel";
import nc from "next-connect";
import multer from "multer";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";
import Item from "../../../database/models/items";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRouter = nc({
  onNoMatch(req, res) {
    res.statusCode(405), json({ error: `method ${req.method} not allowed` });
  },
});

const arrayOfImages = upload.fields([
  { name: "cardImage", maxCount: 1 },
  { name: "images", maxCount: 5 },
]);
apiRouter.post(arrayOfImages, async (req, res) => {
  const urlArray = [];
  let cardImage = "";
  const imagesArray = req.files["images"];
  let result = await cloudinary.uploader.upload(
    req.files["cardImage"][0].path,
    { folder: "cardImages" },
    async (err, result) => {
      if (err) console.log(err);

      fs.unlinkSync(req.files["cardImage"][0].path);
    }
  );
  cardImage = result.secure_url;
  for (let i = 0; i < imagesArray.length; i++) {
    let res = await cloudinary.uploader.upload(
      imagesArray[i].path,
      { folder: "Images" },
      async (err, result) => {
        if (err) console.log(err);

        fs.unlinkSync(req.files["images"][i].path);
        // TODO : need to implement the data save to database
      }
    );
    urlArray.push(res.secure_url);
  }
  console.log(urlArray);
  console.log(cardImage);
  dataBaseConnection();
  const userItem = new Item({
    shortDescription: req.body.shortDescription,
    longDescription: req.body.longDescription,
    price: req.body.itemPrice,
    cardImage: cardImage,
    images: urlArray,
  });
  userItem.save((err) => {
    if (err) console.log(err);
    return console.log("your prodcut has been added to database.");
  });

  res.redirect("/dashboard");
});

export default apiRouter;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
