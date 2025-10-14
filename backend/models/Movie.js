import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    rating: Number,
    watched: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model("Movie", movieSchema);
