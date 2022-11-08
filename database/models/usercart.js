import { Schema } from "mongoose";
import { mongoose } from "mongoose";

const cartScheam = Schema({
  shortDescription: String,
  price: Number,
  cardImage: String,
  userName: String,
});

const CartItems =
  mongoose.models.CartItems || mongoose.model("CartItems", cartScheam);

export default CartItems;
