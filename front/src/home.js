import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ loggedIn, email }) => {
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
    // Example authentication logic goes here...
    navigate('/dashboard'); // Navigate to dashboard or update loggedIn state on successful login
  };

  return (
    <div className="mainContainer" style={{ backgroundColor: "#003087", color: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="contentContainer">
        {!showLoginForm && (
          <div className="titleContainer" style={{ textAlign: 'center' }}>
            <div>Welcome!</div>
            <div style={{ fontSize: '0.8em', textAlign: 'center', marginTop: '10px' }}>
              Need help finding a fitness buddy?
            </div>
          </div>
        )}
        {!showLoginForm && (
          <div className="buttonContainer" style={{ textAlign: 'center' }}>
            <input
              className="inputButton"
              type="button"
              onClick={handleLoginButtonClick}
              value="Log in"
              style={{ fontSize: '3.0em', padding: '15px 25px', marginTop: '20px' }}
            />
          </div>
        )}
        {showLoginForm && (
          <div className="loginFormContainer" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.0em', marginBottom: '15px' }}>Log In Here</div>
            <div style={{ fontSize: '1.5em', marginBottom: '25px' }}>Enter username and password below.</div>
            <input
              type="text"
              className="inputField"
              value={inputEmail}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
            />
            <br />
            <input
              type="password"
              className="inputField"
              value={inputPassword}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
              style={{ marginBottom: '10px', width: '300px', padding: '10px' }}
            />
            <br />
            <input
              className="inputButton"
              style={{ display: 'block', margin: '0 auto', fontSize: '1.2em', padding: '10px 20px' }}
              type="button"
              onClick={handleLoginSubmit}
              value="Submit"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
