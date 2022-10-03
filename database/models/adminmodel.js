import { Schema } from "mongoose";
import { mongoose } from "mongoose";

const infoSchema = new Schema({
  username: String,
  password: String,
});

const Info = mongoose.models.Info || mongoose.model("Info", infoSchema);

export default Info;
