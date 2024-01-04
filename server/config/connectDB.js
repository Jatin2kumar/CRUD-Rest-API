import mongoose from "mongoose";
export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MongoDB_URI);
    console.log("Successfully connected to the Database.");
  } catch (error) {
    console.error("Error connecting to the database, ", error);
  }
}
