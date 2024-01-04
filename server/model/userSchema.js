import mongoose from "mongoose";

const userschema = mongoose.Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
  },
  password: String,
  description: String,
  title: String,
});

export default mongoose.model("user", userschema);
