import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js"; // ✅ import the db connection

import bookRoutes from "./routes/books.js";
import movieRoutes from "./routes/movies.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json({ strict: true }));

// ✅ Connect to MongoDB
connectDB();

// ✅ Routes
app.use("/api/books", bookRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/auth", authRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
