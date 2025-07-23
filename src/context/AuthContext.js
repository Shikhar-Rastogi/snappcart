import React, { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  user: null,
  loading: true,
  error: null,
};

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "INIT_USER":
      return { ...state, user: action.payload, loading: false };
    case "LOGIN_START":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { user: action.payload, loading: false, error: null };
    case "LOGIN_FAILURE":
      return { user: null, loading: false, error: action.payload };
    case "LOGOUT":
      return { user: null, loading: false, error: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    dispatch({
      type: "INIT_USER",
      payload: storedUser ? JSON.parse(storedUser) : null,
    });
  }, []);

  useEffect(() => {
    if (state.user) {
      localStorage.setItem("authUser", JSON.stringify(state.user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [state.user]);

  
  const register = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.username === newUser.username);
    if (exists) throw new Error("Username already exists");

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
  };

  // Login
  const login = async (userData, remember = false) => {
    dispatch({ type: "LOGIN_START" });
    try {
      await new Promise((res) => setTimeout(res, 500)); 

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const matchedUser = users.find(
        (u) =>
          u.username === userData.username &&
          u.password === userData.password
      );

      if (!matchedUser) {
        throw new Error("Invalid credentials");
      }

      dispatch({ type: "LOGIN_SUCCESS", payload: matchedUser });

      if (remember) {
        localStorage.setItem("authUser", JSON.stringify(matchedUser));
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.message });
      throw err; 
    }
  };

  const logout = () => dispatch({ type: "LOGOUT" });

  return (
    <AuthContext.Provider value={{ ...state, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
