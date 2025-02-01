import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected Successfully!");
  } catch (error) {
    console.log(`Error connecting to Data Base ${error.message}`);
  }
};

export default connectDB;
