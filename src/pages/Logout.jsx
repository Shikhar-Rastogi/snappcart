import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    logout();
  }, [logout]);

  useEffect(() => {
    if (user === null) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [user, navigate]);

  return <p style={{ textAlign: "center", marginTop: "2rem" }}>Logging out...</p>;
};

export default Logout;
