import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number },
    status: {
      type: String,
      enum: ["To Watch", "Watching", "Watched"],
      default: "To Watch",
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true } // adds createdAt and updatedAt automatically
);

export default mongoose.model("Movie", movieSchema);
