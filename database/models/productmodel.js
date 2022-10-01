import { Schema } from "mongoose";
import { mongoose } from "mongoose";

const productSchema = new Schema({
  title: String,
  body: String,
  image: String,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
