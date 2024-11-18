import React from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>
        <form className="contact-form">
          <input type="text" className="input" placeholder="Your Name" />
          <input type="email" className="input" placeholder="Your Email" />
          <textarea className="textarea" placeholder="Your Message"></textarea>
          <button type="submit" className="button">
            Send Message
          </button>
          <Link to="/" className="nav-button">
            Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Contact;
