import React from "react";
import "../styles/orderconfirmed.css";

const OrderConfirmed = () => {
  return (
    <div className="order-confirmed-container">
      <h1>🎉 Thank you for your order!</h1>
      <p>Your order has been placed successfully. We will contact you shortly.</p>
      <p>Payment Method: <strong>Cash on Delivery</strong></p>
    </div>
  );
};

export default OrderConfirmed;
