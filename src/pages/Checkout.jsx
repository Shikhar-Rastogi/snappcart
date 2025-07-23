import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import "../styles/checkout.css";

const Checkout = () => {
  const { state, dispatch } = useCart();
  const { cartItems } = state;
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
    country: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // (Optional) Validate required fields here
    const requiredFields = ["firstName", "lastName", "address", "city", "state", "zip", "email", "phone", "country"];
    const isEmptyField = requiredFields.some((field) => !form[field]);
    if (isEmptyField) {
      alert("Please fill all required fields *");
      return;
    }

    // Clear cart (optional)
    dispatch({ type: "CLEAR_CART" });

    // Redirect to thank you page
    navigate("/order-confirmed");
  };

  return (
    <div className="checkout-container">
      <div className="billing-section">
        <h2>Billing Details</h2>
        <form onSubmit={handlePlaceOrder}>
          <label>Country *</label>
          <select name="country" required value={form.country} onChange={handleChange}>
            <option value="">Select a country…</option>
            <option value="India">India</option>
            <option value="USA">United States</option>
          </select>

          <div className="form-row">
            <input type="text" name="firstName" placeholder="First Name *" required value={form.firstName} onChange={handleChange}/>
            <input type="text" name="lastName" placeholder="Last Name *" required value={form.lastName} onChange={handleChange}/>
          </div>

          <input type="text" name="company" placeholder="Company Name (optional)" value={form.company} onChange={handleChange} />
          <input type="text" name="address" placeholder="Street Address *" required value={form.address} onChange={handleChange} />
          <input type="text" name="apartment" placeholder="Apartment, suite (optional)" value={form.apartment} onChange={handleChange} />
          <input type="text" name="city" placeholder="Town / City *" required value={form.city} onChange={handleChange} />

          <div className="form-row">
            <input type="text" name="state" placeholder="State / County *" required value={form.state} onChange={handleChange} />
            <input type="text" name="zip" placeholder="Postcode / Zip *" required value={form.zip} onChange={handleChange} />
          </div>

          <input type="email" name="email" placeholder="Email Address *" required value={form.email} onChange={handleChange} />
          <input type="text" name="phone" placeholder="Phone *" required value={form.phone} onChange={handleChange} />

          {/* ✅ Move the order summary here so the button can submit the form */}
        </form>
      </div>

      <div className="order-summary">
        <h2>Your Order</h2>
        <div className="order-items">
          {cartItems.map((item) => (
            <div className="item" key={item.id}>
              <span>
                {item.name} × {item.qty}
              </span>
              <span>Rs{(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <div className="item">
            <strong>Subtotal</strong>
            <span>Rs{subtotal.toFixed(2)}</span>
          </div>
          <div className="item total">
            <strong>Total</strong>
            <span>Rs{subtotal.toFixed(2)}</span>
          </div>
        </div>

        <div className="payment-methods">
          <h4>Cash on Delivery</h4>
          <p>Pay with cash upon delivery.</p>
        </div>

        <button type="submit" form="checkout-form" className="place-order-button" onClick={handlePlaceOrder}>
          PLACE ORDER
        </button>
      </div>
    </div>
  );
};

export default Checkout;
