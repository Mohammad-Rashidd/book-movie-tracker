import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="home-page">
      <h1>Welcome, {user ? user.username : "Guest"}!</h1>
      <p>Track your favorite books and movies here.</p>

      <div className="home-actions">
        <Link to="/books">
          <button>Go to Books</button>
        </Link>
        <Link to="/movies">
          <button>Go to Movies</button>
        </Link>
      </div>

      <div className="home-info">
        <p>
          This is your personal dashboard. You can view all your books and
          movies, add new ones, or edit your collection.
        </p>
      </div>
    </div>
  );
};

export default Home;
