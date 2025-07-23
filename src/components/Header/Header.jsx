import React, { useState } from "react";
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdMenu, IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);
  const handleRedirect = (path) => {
    navigate(path);
    setActiveDropdown(null);
  };

  return (
    <header className="header">
      <div className="header-left" onClick={() => navigate("/home")}>
        <div className="logo">SnappCart</div>
      </div>

      <div className="header-center">
        <ul className="nav-links">
          <li className="nav-item" onClick={() => handleRedirect("/home")}>
            Home
          </li>

          <li
            className="nav-item dropdown-parent"
            onMouseEnter={() => handleMouseEnter("Shop")}
            onMouseLeave={handleMouseLeave}
          >
            Shop <IoMdArrowDropdown />
            {activeDropdown === "Shop" && (
              <ul className="dropdown">
                <li onClick={() => handleRedirect("/shop")}>All Products</li>
                <li onClick={() => handleRedirect("/shop/categories")}>Categories</li>
                <li onClick={() => handleRedirect("/shop/best-sellers")}>Best Sellers</li>
              </ul>
            )}
          </li>

          <li
            className="nav-item dropdown-parent"
            onMouseEnter={() => handleMouseEnter("Contact")}
            onMouseLeave={handleMouseLeave}
          >
            Contact <IoMdArrowDropdown />
            {activeDropdown === "Contact" && (
              <ul className="dropdown">
                <li onClick={() => handleRedirect("/contact#about-us")}>About Us</li>
                <li onClick={() => handleRedirect("/contact#faqs")}>FAQs</li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className="header-right">
        <span className="icon" onClick={() => handleRedirect("/wishlist")}>
          <FaRegHeart /> Wishlist
        </span>
        <span className="icon" onClick={() => handleRedirect("/cart")}>
          <IoCart /> Cart
        </span>
        <div
          className="icon dropdown-parent menu-dropdown-wrapper"
          onMouseEnter={() => handleMouseEnter("Menu")}
          onMouseLeave={handleMouseLeave}
        >
          <IoMdMenu className="menu-icon" />
          {activeDropdown === "Menu" && (
            <ul className="dropdown right-align">
              <li onClick={() => handleRedirect("/login")}>My Account</li>
              <li onClick={() => handleRedirect("/signup")}>Create Account</li>
              <li onClick={() => handleRedirect("/logout")}>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
