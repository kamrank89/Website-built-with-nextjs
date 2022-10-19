import Item from "../../../database/models/items";
import dataBaseConnection from "../../../database/connection";
import nc from "next-connect";
import multer from "multer";
import fs from "fs";
import { v2 as cloudinary } from "cloudinary";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRouteredit = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});
const arrayOfImages = upload.fields([{ name: "images" }]);

apiRouteredit.post(arrayOfImages, async (req, res) => {
  const itemId = req.query.edititem;
  const urlArray = [];
  const imagesArray = req.files["images"];
  for (let i = 0; i < imagesArray.length; i++) {
    let res = await cloudinary.uploader.upload(
      imagesArray[i].path,
      { folder: "Images" },
      async (err, result) => {
        if (err) console.log(err);

        fs.unlinkSync(req.files["images"][i].path);
      }
    );
    urlArray.push(res.secure_url);
  }

  dataBaseConnection();
  const updatedItem = Item.findOneAndUpdate(
    { _id: itemId },
    { $push: { images: { $each: urlArray } } },
    (err, change) => {
      if (err) console.log(err);
      console.log(`${change} has been updated`);
    }
  );
  console.log(updatedItem);
  res.redirect(`/dashboard/${itemId}`);
});

export default apiRouteredit;
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
