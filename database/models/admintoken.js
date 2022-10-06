import { Schema } from "mongoose";
import { mongoose } from "mongoose";

const adminTokenSchema = new Schema({
  title: String,
  body: String,
});

const Token =
  mongoose.models.Token || mongoose.model("Token", adminTokenSchema);

export default Token;
