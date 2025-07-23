import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ Added for navigation
import "../styles/cart.css";

const Cart = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;
  const navigate = useNavigate(); // ✅ Init navigate

  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-container">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Images</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td><img src={item.image} alt={item.name} className="cart-image" /></td>
              <td>{item.name}</td>
              <td>Rs{item.price.toFixed(2)}</td>
              <td className="qty-btns">
                <button onClick={() => dispatch({ type: "DECREASE", payload: item.id })}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => dispatch({ type: "INCREASE", payload: item.id })}>+</button>
              </td>
              <td>Rs{(item.price * item.qty).toFixed(2)}</td>
              <td>
                <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}>✖</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-totals">
        <h3>Cart Totals</h3>
        <p>Subtotal: Rs{total.toFixed(2)}</p>
        <p>Total: Rs{total.toFixed(2)}</p>
        <button
          className="checkout-btn"
          onClick={() => navigate("/checkout")} // ✅ Go to /checkout
        >
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
