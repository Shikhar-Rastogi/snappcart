import React from "react";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "./ProductCard"; 
import "../styles/wishlist.css";

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="product-list-page">
      <h2 className="page-title">Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="empty-message">No products in wishlist yet.</p>
      ) : (
        <div className="products-grid">
          {wishlist.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
