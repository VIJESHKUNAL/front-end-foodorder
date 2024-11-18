import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../images/images.jpg"; // Ensure you have a company logo image
import facebookLogo from "../images/download.png"; // Ensure you have a Facebook logo image
import instagramLogo from "../images/images.png"; // Ensure you have an Instagram logo image
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img src={companyLogo} className="company-logo" alt="Company Logo" />
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          We are passionate about delivering the best food experience. Our
          mission is to provide high-quality, delicious food that brings joy to
          our customers. Join us on our journey to create memorable dining
          experiences.
        </p>
        <Link to="/" className="nav-button">
          Go to Home
        </Link>
        <div className="social-media-links">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookLogo} className="social-logo" alt="Facebook" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramLogo} className="social-logo" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
