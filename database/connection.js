import { mongoose } from "mongoose";

const dataBaseConnection = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:${process.env.MongoPassword}@website-project.fdllzc2.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("database connected");
  } catch (err) {
    console.log(err);
  }
};

export default dataBaseConnection;
