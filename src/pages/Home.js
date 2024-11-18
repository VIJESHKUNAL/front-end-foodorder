// import React from "react";
// import logo from "../images/images.jpg"; // Ensure you have a logo image in the src/images directory
// import "../styles/home.css";
// import { Link } from "react-router-dom";

// import pizzaImage from "../images/pizza.jpg";
// import burgerImage from "../images/burger.jpg";
// import sushiImage from "../images/sushi.jpg";
// import pastaImage from "../images/delicious-pasta-plate.png";
// import tacosImage from "../images/Delicious grilled chicken tacos -3.jpg";
// import steakImage from "../images/well-done-piece-steak-wooden-board.png";
// import sandwichImage from "../images/sandwich.jpg";
// import soupImage from "../images/delicious-autumn-soup-assortment.png";
// import iceCreamImage from "../images/view-delicious-frozen-ice-cream-dessert-with-bananas.png";

// const foodItems = [
//   {
//     id: 1,
//     name: "Pizza",
//     description: "pizza",
//     price: "$10",
//     image: pizzaImage,
//   },
//   {
//     id: 2,
//     name: "Burger",
//     description: "Juicy beef burger",
//     price: "$8",
//     image: burgerImage,
//   },
//   {
//     id: 3,
//     name: "Sushi",
//     description: "Fresh sushi rolls",
//     price: "$15",
//     image: sushiImage,
//   },
//   {
//     id: 4,
//     name: "Pasta",
//     description: "Italian pasta with sauce",
//     price: "$12",
//     image: pastaImage,
//   },
//   {
//     id: 5,
//     name: "Tacos",
//     description: "Mexican tacos",
//     price: "$9",
//     image: tacosImage,
//   },
//   {
//     id: 6,
//     name: "Steak",
//     description: "Grilled steak",
//     price: "$20",
//     image: steakImage,
//   },
//   {
//     id: 7,
//     name: "Sandwich",
//     description: "Ham and cheese sandwich",
//     price: "$6",
//     image: sandwichImage,
//   },
//   {
//     id: 8,
//     name: "Soup",
//     description: "Hot chicken soup",
//     price: "$5",
//     image: soupImage,
//   },
//   {
//     id: 9,
//     name: "Ice Cream",
//     description: "Vanilla ice cream",
//     price: "$4",
//     image: iceCreamImage,
//   },
// ];

// const Home = () => {
//   return (
//     <div className="home-container">
//       <div className="navbar">
//         <div className="nav-buttons">
//           <Link to="/" className="nav-button">
//             Home
//           </Link>
//           <Link to="/Contact" className="nav-button">
//             Contact
//           </Link>
//           <Link to="/About" className="nav-button">
//             About Us
//           </Link>
//           <Link to="/Cart" className="nav-button cart-button">
//             Cart
//           </Link>
//         </div>
//       </div>
//       <div className="hero-section">
//         <img src={logo} className="logo" alt="logo" />
//         <h1 className="hero-text">Welcome to Food Order</h1>
//       </div>
//       <div className="menu-section">
//         <h2 className="menu-title">Our Menu</h2>
//         <div className="food-menu">
//           {foodItems.map((item) => (
//             <button key={item.id} className="food-item">
//               <img src={item.image} alt={item.name} className="food-image" />
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//               <p>{item.price}</p>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import Navbar from "./navbar";
import HeroSection from "./hero";
import MenuSection from "./menu";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <MenuSection />
    </div>
  );
};

export default Home;
