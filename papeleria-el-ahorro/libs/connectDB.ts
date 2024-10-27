import mongoose from "mongoose";

const { DATABASE_URL } = process.env;

if (!DATABASE_URL) {
  throw new Error("MONGODB_URI must be defined");
}

export const connectDB = async () => {
  try {
    const { connection } = await mongoose.connect(DATABASE_URL);
    if (connection.readyState === 1) {
      console.log("MongoDB Connected");
      return Promise.resolve(true);
    }
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};
