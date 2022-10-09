import { Schema } from "mongoose";
import { mongoose } from "mongoose";

const itemScheam = Schema({
  shortDescription: String,
  longDescription: String,
  price: Number,
  cardImage: String,
  images: [String],
});

const Item = mongoose.models.Item || mongoose.model("Item", itemScheam);

export default Item;
