import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import "../styles/productlist.css";

const ProductList = ({ filterBy }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fixCategoryName = (category) => {
    switch (category.toLowerCase()) {
      case "jewelery":
        return "Jewellery";
      case "men's clothing":
        return "Men's Clothing";
      case "women's clothing":
        return "Women's Clothing";
      case "electronics":
        return "Electronics";
      default:
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        const sizes = ["Small", "Medium", "Large"];
        const colors = ["White", "Black", "Blue"];

        const formatted = data.map((item) => {
          const basePrice = item.price;
          const variants = [];

          sizes.forEach((size) => {
            colors.forEach((color) => {
              const sizeModifier =
                size === "Small" ? 0 : size === "Medium" ? 1 : 2;
              const colorModifier =
                color === "White" ? 0 : color === "Black" ? 0.5 : 1;

              const price = basePrice + sizeModifier + colorModifier;
              const originalPrice = price * 1.2;

              variants.push({
                size,
                color,
                price: parseFloat(price.toFixed(2)),
                originalPrice: parseFloat(originalPrice.toFixed(2)),
              });
            });
          });

          return {
            id: item.id,
            name: item.title,
            image: item.image,
            // Optional: if you want to also correct the category internally
            category:
              item.category === "jewelery" ? "jewellery" : item.category,
            discount: 20,
            isNew: item.id % 5 === 0,
            variants,
          };
        });

        setProducts(formatted);
        setLoading(false);
      } catch (err) {
        setError("Failed to load products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  // --- GROUP BY CATEGORY ---
  if (filterBy === "category") {
    const grouped = products.reduce((acc, product) => {
      if (!acc[product.category]) acc[product.category] = [];
      acc[product.category].push(product);
      return acc;
    }, {});

    return (
      <>
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category} className="category-group">
            <h3 className="category-title">{fixCategoryName(category)}</h3>
            <div className="product-list">
              {items.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        ))}
      </>
    );
  }

  const filteredProducts =
    filterBy === "best-sellers"
      ? products.filter((p) => p.id % 3 === 0)
      : products;

  return (
    <div className="product-list">
      {filteredProducts.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
