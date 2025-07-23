import React from "react";
import "./footer.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Branding & Contact Info */}
        <div className="footer-section about">
          <h2 className="logo">SnappCart</h2>
          <p>Instantly find what you need.</p>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> Add: abc, Noida, India.</li>
            <li><FaEnvelope /> Email: Contact@1.com</li>
            <li><FaPhoneAlt /> Phone: 0000000000</li>
          </ul>
        </div>

        {/* Middle - Information */}
        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/delivery">Delivery Information</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Right - Customer Service */}
        <div className="footer-section">
          <h3>Customer Services</h3>
          <ul>
            <li><Link to="/shipping">Shipping Policy</Link></li>
            <li><Link to="/contact">Help & Contact Us</Link></li> {/* Contact Page */}
            <li><Link to="/returns">Returns & Refunds</Link></li>
            <li><Link to="/stores">Online Stores</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          Copyright © <span className="highlight">SnappCart</span> all rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
