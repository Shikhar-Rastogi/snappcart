// src/pages/Shop.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import ProductList from "./ProductList";

const Shop = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const section = query.get("section");

  const getHeading = () => {
    switch (section) {
      case "all":
        return "All Products";
      case "categories":
        return "Product Categories";
      case "best":
        return "Best Sellers";
      default:
        return "Our Products";
    }
  };

  const getFilterType = () => {
    switch (section) {
      case "categories":
        return "category";
      case "best":
        return "best-sellers";
      default:
        return null;
    }
  };

  return (
    <div className="shop-container" style={{ padding: "2rem" }}>
      <h2>{getHeading()}</h2>
      <ProductList filterBy={getFilterType()} />
    </div>
  );
};

export default Shop;
