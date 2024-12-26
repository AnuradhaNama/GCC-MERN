import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      // Store token and role in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);

      // Navigate to the appropriate dashboard based on role
      if (data.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (data.role === 'user') {
        navigate('/user/dashboard');
      } else {
        setError('Unknown role. Cannot proceed.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred while logging in.');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleRegister} className="register-button">
        Register
      </button>
    </div>
  );
};

export default Login;