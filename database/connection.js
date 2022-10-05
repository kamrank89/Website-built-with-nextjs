import { mongoose } from "mongoose";

const dataBaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
};

export default dataBaseConnection;
