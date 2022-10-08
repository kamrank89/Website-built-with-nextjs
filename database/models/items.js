import { Schema } from "mongoose";
import { mongoose } from "mongoose";

const itemScheam = Schema({
  shortDescription: String,
  longDescription: String,
  price: Number,
  cardImage: String,
  image1: String,
  image2: String,
  image3: String,
  image4: String,
  image5: String,
});

const Item = mongoose.models.Item || mongoose.model("Item", itemScheam);

export default Item;
