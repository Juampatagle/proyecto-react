// src/components/CartWidget.jsx
import React from "react";
import { FaShoppingCart } from "react-icons/fa"; // Asegúrate de que has instalado react-icons

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="badge bg-primary">3</span> {/* Número hardcodeado */}
    </div>
  );
};

export default CartWidget;

