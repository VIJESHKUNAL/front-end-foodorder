import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          FoodOrder
        </Link>
        <div className="nav-buttons">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <div className="dropdown">
            <button className="nav-button dropdown-toggle">Menu</button>
            <div className="dropdown-content">
              <Link to="/menu/pizza" className="dropdown-item">
                Pizza
              </Link>
              <Link to="/menu/burger" className="dropdown-item">
                Burger
              </Link>
              <Link to="/menu/sushi" className="dropdown-item">
                Sushi
              </Link>
              {/* Add more menu items here */}
            </div>
          </div>
          <Link to="/contact" className="nav-button">
            Contact
          </Link>
          <Link to="/about" className="nav-button">
            About Us
          </Link>
          <Link to="/cart" className="nav-button cart-button">
            Cart
          </Link>
          <Link to="/cart" className="nav-button cart-button">
            Cart
          </Link>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">Search</button>
        </div>
        <div className="nav-auth">
          <Link to="/login" className="nav-button auth-button">
            Login
          </Link>
          <Link to="/signup" className="nav-button auth-button">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
