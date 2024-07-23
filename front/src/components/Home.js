import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

const Home = ({ loggedIn, email, setLoggedIn, setEmail }) => {
  const navigate = useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
  };

  const handleEmailChange = (event) => {
    setInputEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setInputPassword(event.target.value);
  };

  const handleLoginSubmit = () => {
    setLoggedIn(true);
    setEmail(inputEmail);
    navigate('/userhome');
  };

  return (
    <div className="main-container">
      <div className="content-container">
        {!loggedIn && !showLoginForm && (
          <div className="title-container">
            <h1>Welcome!</h1>
            <h2 className="subtitle">Need help finding a fitness buddy?</h2>
            <div className="login-button-container">
              <button
                className="input-button"
                onClick={handleLoginButtonClick}
              >
                Log in
              </button>
            </div>
          </div>
        )}
        {showLoginForm && (
          <div className="login-form-container">
            <h2 className="form-title">Log In Here</h2>
            <p className="form-subtitle">Enter username and password below.</p>
            <input
              type="text"
              className="input-field"
              value={inputEmail}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            <input
              type="password"
              className="input-field"
              value={inputPassword}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
            <button
              className="input-button"
              onClick={handleLoginSubmit}
            >
              Submit
            </button>
          </div>
        )}
        {loggedIn && (
          <div className="logged-in-container">
            <h2 className="logged-in-title">Welcome, {email}!</h2>
            <p className="logged-in-subtitle">You are now logged in.</p>
            <Link to="/findbuddy" className="input-button">Find a Buddy</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

