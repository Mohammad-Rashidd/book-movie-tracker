import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: String,
    description: String,
    read: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
