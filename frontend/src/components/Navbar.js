import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import {
  FaHome,
  FaBook,
  FaFilm,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <FaFilm style={{ marginRight: "5px", fontSize: "28px" }} />
        <FaBook style={{ marginRight: "8px", fontSize: "28px" }} />
        <h2 className="logo">MovieBookTracker</h2>
      </div>

      <div className="nav-links">
        {/* Home is visible to everyone */}
        <Link to="/">
          <FaHome />
          Home
        </Link>

        {/* Only show Books & Movies if user is logged in */}
        {user ? (
          <>
            <Link to="/books">
              <FaBook />
              Books
            </Link>
            <Link to="/movies">
              <FaFilm />
              Movies
            </Link>
            <button onClick={handleLogout}>
              <FaSignOutAlt />
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Show Login/Signup only if no user */}
            <Link to="/login">
              <FaSignInAlt />
              Login
            </Link>
            <Link to="/signup">
              <FaUserPlus />
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
