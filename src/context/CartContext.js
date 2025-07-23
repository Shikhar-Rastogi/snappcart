import React, { createContext, useContext, useReducer, useEffect } from "react";

// Create Context
const CartContext = createContext();

// Initial cart state
const initialState = {
  cartItems: [],
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (!action.payload?.id) return state; // guard
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case "INCREASE":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };

    case "DECREASE":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
};

// CartProvider to wrap around App
export const CartProvider = ({ children }) => {
  // Initial state loaded from localStorage
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    const local = localStorage.getItem("cartState");
    return local ? JSON.parse(local) : initialState;
  });

  // Save state to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartState", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
export { CartContext }; 
