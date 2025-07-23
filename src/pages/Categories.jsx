// src/pages/Categories.jsx
import React from "react";
import ProductList from "./ProductList";

const Categories = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Shop by Category</h2>
      <ProductList filterBy="category" />
    </div>
  );
};

export default Categories;
