import { Schema } from "mongoose";
import { mongoose } from "mongoose";

const infoSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: { type: String, required: true, bcrypt: true },
});

const Info = mongoose.models.Info || mongoose.model("Info", infoSchema);

export default Info;
