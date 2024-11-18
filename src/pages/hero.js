import React, { useState, useEffect } from "react";
import logo from "../images/images.jpg"; // Ensure you have a logo image in the src/images directory
import background1 from "../images/pizzaimg.png"; // Ensure you have a background image in the src/images directory
import background2 from "../images/well-done-piece-steak-wooden-board.png"; // Add another background image
import background3 from "../images/view-delicious-frozen-ice-cream-dessert-with-bananas.png"; // Add another background image
import "../styles/hero.css";

const backgroundImages = [background1, background2, background3];

const HeroSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImages[backgroundIndex]})` }}
    >
      <div className="overlay">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="hero-text">Welcome to Food Order</h1>
        <p className="hero-subtext">
          Delicious food delivered to your doorstep
        </p>
        <button className="order-now-button">Order Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
