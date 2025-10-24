import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>🎬 Movie & Book Tracker</h3>
          <p>Track your favorite movies and books — all in one place.</p>
        </div>

        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/Mohammad-Rashidd"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <p className="footer-bottom">
        © {new Date().getFullYear()} Movie & Book Tracker. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
