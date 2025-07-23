import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // ✅ Required for .toBeInTheDocument()
import ProductCard from "../../pages/ProductCard";


const mockWishlistDispatch = jest.fn();
const mockCartDispatch = jest.fn();

jest.mock("../../context/WishlistContext", () => ({
  useWishlist: () => ({
    wishlist: [],
    dispatch: mockWishlistDispatch,
  }),
}));

jest.mock("../../context/CartContext", () => ({
  useCart: () => ({
    dispatch: mockCartDispatch,
  }),
}));

const product = {
  id: 1,
  name: "Test Product",
  image: "https://via.placeholder.com/150",
  isNew: true,
  discount: 10,
  variants: [
    {
      size: "M",
      color: "Red",
      price: 100,
      originalPrice: 120,
    },
  ],
};

describe("ProductCard Component", () => {
  beforeEach(() => {
    mockCartDispatch.mockClear();
    mockWishlistDispatch.mockClear();
  });

  it("renders product name, image, and price", () => {
    render(<ProductCard product={product} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(/Rs100.00/)).toBeInTheDocument();
  });

  it("dispatches ADD_TO_CART when button is clicked", () => {
    render(<ProductCard product={product} />);

    fireEvent.click(screen.getByText(/Add to Cart/i));
    expect(mockCartDispatch).toHaveBeenCalledWith(
      expect.objectContaining({
        type: "ADD_TO_CART",
        payload: expect.objectContaining({
          name: "Test Product",
          size: "M",
          color: "Red",
        }),
      })
    );
  });
});
