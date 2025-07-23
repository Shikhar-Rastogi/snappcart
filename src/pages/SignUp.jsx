import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const { register, login } = useAuth(); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { username, email, password };

    try {
      
      register(newUser);

  
      await login({ username, password }, remember);

      navigate("/");
    } catch (err) {
      alert("Signup failed: " + err.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Email address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label className="remember-me">
          <input
            type="checkbox"
            checked={remember}
            onChange={() => setRemember(!remember)}
          />
          Remember Me
        </label>

        <button type="submit" className="register-btn">
          REGISTER NOW
        </button>

        <div className="or-divider">or</div>

        <button
          type="button"
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Signup;
