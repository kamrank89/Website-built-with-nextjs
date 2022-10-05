import dataBaseConnection from "../../../database/connection";
import Product from "../../../database/models/productmodel";
import nc from "next-connect";
import multer from "multer";
import fs from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

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

apiRouter.use(upload.single("image"));
// var multer = require("multer");

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

// var upload = multer({ storage: storage });
apiRouter.get((req, res) => {
  res.send("hi there!");
});
apiRouter.post((req, res) => {
  let uploadedImage = "";
  cloudinary.uploader.upload(req.file.path, async (err, result) => {
    if (err) console.log(err);

    uploadedImage = await result.secure_url;
    console.log(uploadedImage);
    dataBaseConnection();
    const item1 = req.body.title;
    const item2 = req.body.body;
    const item3 = uploadedImage;
    console.log(uploadedImage);
    fs.unlinkSync(req.file.path);
    const newProduct = new Product({ title: item1, body: item2, image: item3 });
    newProduct.save((err) => {
      if (err) {
        console.log(err);
      }
      return console.log("new product has been added");
    });
  });
  res.redirect("/");
});
// const addData = async (req, res) => {
//   dataBaseConnection();
//   const firstproduct = Product.create(req.body);
//   res.json({ firstproduct });
// };

export default apiRouter;
export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
