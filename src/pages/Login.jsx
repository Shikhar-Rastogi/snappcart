import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { username, password };

    try {
      await login(userData, remember); 
      navigate('/'); 
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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

        {error && <p className="error-msg">{error}</p>}

        <button type="submit" className="register-btn">
          LOGIN NOW
        </button>

        <div className="or-divider">or</div>

        <button
          type="button"
          className="login-btn"
          onClick={() => navigate('/signup')}
        >
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Login;
