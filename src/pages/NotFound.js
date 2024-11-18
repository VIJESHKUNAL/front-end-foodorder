// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.css"; // Optional: for styling
// import backgroundImage from "../images/404-error.jpg";

const NotFound = () => {
  return (
    <div className="not-found">
      <br />
      {/* <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p> */}
      <Link to="/" className="nav-button">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
