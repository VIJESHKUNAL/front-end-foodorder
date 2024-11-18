// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../Context/cartcontext";
// import logo from "../images/images.jpg"; // Ensure you have a logo image in the src/images directory
// import background from "../images/Designer.png"; // Ensure you have a background image in the src/images directory
// import "../styles/cart.css";

// const Cart = () => {
//   const { cartItems, removeFromCart } = useContext(CartContext);

//   const handleRemove = (item) => {
//     removeFromCart(item);
//   };

//   return (
//     <div
//       className="cart-container"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <div className="navbar">
//         <img src={logo} className="logo" alt="logo" />
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
//       <h2>Your Cart</h2>
//       <div className="cart-items">
//         {cartItems.map((item, index) => (
//           <div key={index} className="cart-item">
//             <img src={item.image} alt={item.name} className="cart-item-image" />
//             <div className="cart-item-details">
//               <h3>{item.name}</h3>
//               <p>{item.price}</p>
//               <p>Quantity: {item.quantity}</p>
//               <button
//                 className="remove-button"
//                 onClick={() => handleRemove(item)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="checkout-button">Proceed to Checkout</button>
//     </div>
//   );
// };

// export default Cart;

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../images/images.jpg"; // Ensure you have a logo image in the src/images directory
// import background from "../images/Designer.png"; // Ensure you have a background image in the src/images directory
// import "../styles/cart.css";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   // Fetch the cart items from the backend API
//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await fetch(
//           "http://127.0.0.1:8000/api/accounts/cart/"
//         );
//         const data = await response.json();
//         setCartItems(data);
//       } catch (error) {
//         console.error("Error fetching cart items:", error);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   const handleRemove = async (itemId) => {
//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/accounts/cart/remove/${itemId}/`,
//         {
//           method: "DELETE",
//         }
//       );

//       if (response.status === 204) {
//         // Item was removed, update the cart items list in the UI
//         setCartItems(cartItems.filter((item) => item.id !== itemId));
//       } else {
//         console.error("Failed to remove item from cart");
//       }
//     } catch (error) {
//       console.error("Error removing item from cart:", error);
//     }
//   };

//   return (
//     <div
//       className="cart-container"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <div className="navbar">
//         <img src={logo} className="logo" alt="logo" />
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

//       <h2>Your Cart</h2>
//       {cartItems.length > 0 ? (
//         <table className="cart-table">
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id}>
//                 <td>
//                   <img
//                     src={item.image_url}
//                     alt={item.name}
//                     className="cart-item-image"
//                   />
//                 </td>
//                 <td>{item.name}</td>
//                 <td>{item.description}</td>
//                 <td>{item.price}</td>
//                 <td>{item.quantity}</td>
//                 <td>
//                   <button
//                     className="remove-button"
//                     onClick={() => handleRemove(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No items in your cart.</p>
//       )}
//       <button className="checkout-button">Proceed to Checkout</button>
//     </div>
//   );
// };

// export default Cart;

// import React, { useContext, useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../Context/cartcontext";
// import logo from "../images/images.jpg"; // Ensure you have a logo image in the src/images directory
// import background from "../images/Designer.png"; // Ensure you have a background image in the src/images directory
// import "../styles/cart.css";

// const Cart = () => {
//   const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch cart items based on user email
//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const userEmail = localStorage.getItem("userEmail"); // Assume the user email is stored in localStorage after login
//         const response = await fetch(
//           "http://127.0.0.1:8000/api/accounts/cart/",
//           {
//             method: "GET",
//             headers: {
//               Email: userEmail, // Send user email with the request
//             },
//           }
//         );

//         if (response.ok) {
//           const data = await response.json();
//           console.log(data);
//           setCartItems(data); // Set cart items in context
//           console.log(cartItems);
//         } else {
//           const errorData = await response.json();
//           setError(errorData.error || "Cart is Empty!");
//         }
//       } catch (error) {
//         setError("Cart is Empty!");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchCartItems();
//   }, [setCartItems]);

//   // Handle remove item from cart
//   const handleRemove = async (item) => {
//     try {
//       const response = await fetch(
//         `http://127.0.0.1:8000/api/accounts/cart/remove/${item.id}/`,
//         {
//           method: "DELETE",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.ok) {
//         // Remove the item locally from the state after successful deletion from backend
//         removeFromCart(item);
//       } else {
//         alert("Error removing item from cart.");
//       }
//     } catch (error) {
//       console.error("Error during item removal:", error);
//     }
//   };
//   useEffect(() => {
//     console.log("Updated cartItems:", cartItems);
//   }, [cartItems]);

//   // Handle checkout and mark items as ordered
//   const handleCheckout = async () => {
//     try {
//       const userEmail = localStorage.getItem("userEmail"); // Get user email from localStorage
//       const response = await fetch(
//         "http://127.0.0.1:8000/api/accounts/cart/checkout/",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ email: userEmail }), // Send user email with the request
//         }
//       );

//       if (response.ok) {
//         alert("Items successfully checked out!");
//         // Optionally, you can refresh the cart items after checkout or update the local state
//         const updatedItems = cartItems.map((item) => ({
//           ...item,
//           cart_or_ordered: "O", // Mark as ordered locally
//         }));
//         setCartItems(updatedItems);
//       } else {
//         const errorData = await response.json();
//         alert(errorData.error || "Error during checkout.");
//       }
//     } catch (error) {
//       console.error("Error during checkout:", error);
//     }
//   };

//   // Render the cart items in a table format
//   return (
//     <div
//       className="cart-container"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <div className="navbar">
//         <img src={logo} className="logo" alt="logo" />
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
//       <h2>Your Cart</h2>
//       {console.log(cartItems)}
//       {isLoading ? (
//         <p>Loading cart items...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <table className="cart-table">
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Status</th>
//               <th>Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item, index) => (
//               <tr key={index}>
//                 <td>
//                   <img
//                     src={item.image_url}
//                     alt={item.name}
//                     className="cart-item-image"
//                   />
//                 </td>
//                 <td>{item.name}</td>
//                 <td>{item.description}</td>
//                 <td>{item.price}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.cart_or_ordered === "O" ? "Ordered" : "In Cart"}</td>
//                 <td>
//                   <button
//                     className="remove-button"
//                     onClick={() => handleRemove(item)}
//                   >
//                     Remove
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       {cartItems.length > 0 && (
//         <button className="checkout-button" onClick={handleCheckout}>
//           Proceed to Checkout
//         </button>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartcontext";
import logo from "../images/images.jpg";
import background from "../images/Designer.png";
import "../styles/cart.css";

const Cart = () => {
  const { cartItems, setCartItems, removeFromCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cart items based on user email
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const userEmail = localStorage.getItem("userEmail"); // Assume the user email is stored in localStorage after login
        const response = await fetch(
          "http://127.0.0.1:8000/api/accounts/cart/",
          {
            method: "GET",
            headers: {
              Email: userEmail, // Send user email with the request
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Fetched data:", data);
          setCartItems(data); // Set cart items in context
        } else {
          const errorData = await response.json();
          setError(errorData.error || "Cart is Empty!");
        }
      } catch (error) {
        setError("Cart is Empty!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, [setCartItems]); // Only setCartItems is necessary here

  // Handle remove item from cart
  const handleRemove = async (item) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/accounts/cart/remove/${item.id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // Remove the item locally from the state after successful deletion from backend
        removeFromCart(item);
      } else {
        alert("Error removing item from cart.");
      }
    } catch (error) {
      console.error("Error during item removal:", error);
    }
  };

  // Handle checkout and mark items as ordered
  const handleCheckout = async () => {
    try {
      const userEmail = localStorage.getItem("userEmail"); // Get user email from localStorage
      const response = await fetch(
        "http://127.0.0.1:8000/api/accounts/cart/checkout/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail }), // Send user email with the request
        }
      );

      if (response.ok) {
        alert("Items successfully checked out!");
        const updatedItems = cartItems.map((item) => ({
          ...item,
          cart_or_ordered: "O", // Mark as ordered locally
        }));
        setCartItems(updatedItems);
      } else {
        const errorData = await response.json();
        alert(errorData.error || "Error during checkout.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  // Log updated cartItems
  useEffect(() => {
    console.log("Updated cartItems:", cartItems);
  }, [cartItems]); // This will run every time cartItems changes

  // Render the cart items in a table format
  return (
    <div
      className="cart-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="navbar">
        <img src={logo} className="logo" alt="logo" />
        <div className="nav-buttons">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/Contact" className="nav-button">
            Contact
          </Link>
          <Link to="/About" className="nav-button">
            About Us
          </Link>
          <Link to="/Cart" className="nav-button cart-button">
            Cart
          </Link>
        </div>
      </div>
      <h2>Your Cart</h2>
      {console.log(cartItems)}
      {isLoading ? (
        <p>Loading cart items...</p>
      ) : error ? (
        <p>{error}</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="cart-item-image"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.cart_or_ordered === "O" ? "Ordered" : "In Cart"}</td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {cartItems.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
};

export default Cart;
