import React, { useState, useEffect } from "react";
import "../styles/productcard.css";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext"; 

const ProductCard = ({ product }) => {
  const { name, image, isNew, discount, variants = [], id } = product;

  const { wishlist, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart(); 

  const sizes = [...new Set(variants.map((v) => v.size))];
  const colors = [...new Set(variants.map((v) => v.color))];

  const [selectedSize, setSelectedSize] = useState(sizes[0] || "");
  const [selectedColor, setSelectedColor] = useState(colors[0] || "");

  const selectedVariant = variants.find(
    (v) => v.size === selectedSize && v.color === selectedColor
  );

  const isWished = wishlist.some((item) => item.id === id);

  const toggleWishlist = () => {
    if (isWished) {
      wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id } });
    } else {
      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  };

  useEffect(() => {
    if (!selectedVariant && variants.length > 0) {
      setSelectedSize(variants[0].size);
      setSelectedColor(variants[0].color);
    }
  }, [selectedVariant, variants]);

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    const productToAdd = {
      id: `${id}-${selectedVariant.size}-${selectedVariant.color}`, 
      productId: id, 
      name,
      image,
      size: selectedSize,
      color: selectedColor,
      price: selectedVariant.price,
    };

    cartDispatch({ type: "ADD_TO_CART", payload: productToAdd }); 
  };

  const isDiscounted =
    selectedVariant && selectedVariant.originalPrice > selectedVariant.price;

  return (
    <div className="product-card-combined">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
        {discount > 0 && (
          <span className="badge badge-discount">-{discount}%</span>
        )}
        {isNew && <span className="badge badge-new">New</span>}

        <button
          className={`wishlist-btn${isWished ? " active" : ""}`}
          aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
          type="button"
          onClick={toggleWishlist}
        >
          <svg
            className="wishlist-icon"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill={isWished ? "#ff6f61" : "none"}
            stroke="#ff6f61"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19.5 13.5L12 21l-7.5-7.5A5.481 5.481 0 0 1 2 8.5 5.5 5.5 0 0 1 7.5 3a5.497 5.497 0 0 1 4.5 2.09A5.497 5.497 0 0 1 16.5 3 5.5 5.5 0 0 1 22 8.5a5.481 5.481 0 0 1-2.5 5z" />
          </svg>
        </button>
      </div>

      <div className="product-info">
        <h3 className="product-name">{name}</h3>

        {selectedVariant && (
          <div className="price">
            <span className="current-price">
              Rs{selectedVariant.price.toFixed(2)}
            </span>
            {isDiscounted && (
              <span className="original-price">
                Rs{selectedVariant.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        )}

        <div className="product-options">
          <label>
            <strong>Size:</strong>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
            >
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>

          <label>
            <strong>Color:</strong>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button
          className="btn-add-to-cart"
          onClick={handleAddToCart}
          disabled={!selectedVariant}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
