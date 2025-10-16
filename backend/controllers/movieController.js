import Movie from "../models/Movie.js";

// Get all movies for logged-in user
export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ user: req.userId });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single movie by ID
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findOne({ _id: req.params.id, user: req.userId });
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Add a movie
export const addMovie = async (req, res) => {
  try {
    const { title, director, year } = req.body;
    const movie = new Movie({ title, director, year, user: req.userId });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a movie
export const updateMovie = async (req, res) => {
  try {
    const { title, director, year } = req.body;
    const updatedMovie = await Movie.findOneAndUpdate(
      { _id: req.params.id, user: req.userId },
      { title, director, year },
      { new: true }
    );
    if (!updatedMovie)
      return res.status(404).json({ message: "Movie not found" });
    res.json(updatedMovie);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Delete a movie
export const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });
    if (!deletedMovie)
      return res.status(404).json({ message: "Movie not found" });
    res.json({ message: "Movie deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
