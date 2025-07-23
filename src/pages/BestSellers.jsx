// src/pages/BestSellers.jsx
import React from "react";
import ProductList from "./ProductList";

const BestSellers = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Top Rated Products</h2>
      <ProductList filterBy="best-sellers" />
    </div>
  );
};

export default BestSellers;
