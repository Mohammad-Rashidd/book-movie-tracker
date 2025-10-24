import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String },
    year: { type: Number },
    status: {
      type: String,
      enum: ["To Read", "Reading", "Read"],
      default: "To Read",
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
); // adds createdAt and updatedAt automatically

export default mongoose.model("Book", bookSchema);
