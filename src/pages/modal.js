// import React, { useState, useContext } from "react";
// import "../styles/modal.css";
// import { CartContext } from "../Context/cartcontext.js";

// const Modal = ({ item, isOpen, onClose }) => {
//   const [quantity, setQuantity] = useState(1);
//   const { addToCart } = useContext(CartContext);

//   const handleIncrease = () => {
//     setQuantity((prevQuantity) => prevQuantity + 1);
//   };

//   const handleDecrease = () => {
//     if (quantity > 1) {
//       setQuantity((prevQuantity) => prevQuantity - 1);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart({ ...item, quantity });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="close-button" onClick={onClose}>
//           X
//         </button>
//         <img src={item.image} alt={item.name} className="modal-food-image" />
//         <h3>{item.name}</h3>
//         <p>{item.description}</p>
//         <p>{item.price}</p>
//         <div className="quantity-control">
//           <button onClick={handleDecrease}>-</button>
//           <span>{quantity}</span>
//           <button onClick={handleIncrease}>+</button>
//         </div>
//         <button className="add-to-cart-button" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Modal;

import React, { useState, useContext } from "react";
import "../styles/modal.css";
import { CartContext } from "../Context/cartcontext.js";

const Modal = ({ item, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = async () => {
    const cartItem = { ...item, quantity };

    try {
      const userEmail = localStorage.getItem("userEmail");

      if (!userEmail) {
        console.error("No user email found in localStorage");
        return;
      }

      const response = await fetch(
        "http://127.0.0.1:8000/api/accounts/cart/add/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: cartItem.name,
            image_url: cartItem.image, // Change as per your data structure
            description: cartItem.description,
            price: cartItem.price,
            quantity: cartItem.quantity,
            cart_or_ordered: "C",
            user_email: userEmail,
          }),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Item added:", result);
        addToCart(cartItem); // Update cart in the context
        onClose(); // Close the modal
      } else {
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img src={item.image} alt={item.name} className="modal-food-image" />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <div className="quantity-control">
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Modal;
