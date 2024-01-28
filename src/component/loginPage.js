
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();


    if (!username.includes('@') || !username.endsWith('.com')) {
      alert('Invalid username. It must include "@" and end with ".com".');
      return;
    }


    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    navigate('/success');
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login Page</h1>
        
        <nav>
          <a href="Website">Home</a>
          <a href="LoginPage">Login</a>
          <a href="SignupPage">Booking</a>
        </nav>
        <hr/>
        <br />
        <br />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />

        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/Signin"> SignupPage</a>
        </p>
        <br />
        <br />
      </form>
    </div>
  );
};

export default Login;
