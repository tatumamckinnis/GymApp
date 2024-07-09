// Home.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    <div className="mainContainer" style={{ backgroundColor: "#003087", color: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="contentContainer">
        {!loggedIn && !showLoginForm && (
          <div className="titleContainer" style={{ textAlign: 'center'}}>
            <div>Welcome!</div>
            <div style={{ fontSize: '1.5em', textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
              Need help finding a fitness buddy?
            </div>
            <div style={{ fontSize: '1.2em', marginTop: '20px', textAlign: 'center' }}>
              <input
                className="inputButton"
                type="button"
                onClick={handleLoginButtonClick}
                value="Log in"
                style={{ fontSize: '1.2em', padding: '10px 20px', backgroundColor: '#005BB5', color: 'white', border: 'none', borderRadius: '5px' }}
              />
            </div>
          </div>
        )}
        {showLoginForm && (
          <div className="loginFormContainer" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.0em', marginBottom: '15px', fontWeight: 'bold' }}>Log In Here</div>
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
        {loggedIn && (
          <div className="loggedInContainer" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.0em', marginBottom: '15px', fontWeight: 'bold' }}>Welcome, {email}!</div>
            <div style={{ fontSize: '1.5em', marginBottom: '25px' }}>You are now logged in.</div>
            <Link to="/findbuddy" style={{ color: 'white', fontSize: '1.2em', padding: '10px 20px', backgroundColor: '#005BB5', borderRadius: '5px', textDecoration: 'none' }}>Find a Buddy</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
