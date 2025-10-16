import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
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
      <h2 className="logo">MovieBookTracker</h2>
      <div className="nav-links">
        {/* Home is visible to everyone */}
        <Link to="/">Home</Link>

        {/* Only show Books & Movies if user is logged in */}
        {user ? (
          <>
            <Link to="/books">Books</Link>
            <Link to="/movies">Movies</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            {/* Show Login/Signup only if no user */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
