import React, { useState } from "react";
import Modal from "../pages/modal";
import "../styles/fooditem.css";

const FoodItem = ({ item }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button className="food-item-button" onClick={handleOpenModal}>
        <img src={item.image} alt={item.name} className="food-image" />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>{item.price}</p>
      </button>
      <Modal item={item} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default FoodItem;
