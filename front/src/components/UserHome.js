import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS file

function UserHome() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <div className="content-container">
        <div className="user-welcome">
          <h1>Welcome Back!</h1>
        </div>
        <div className="button-container">
          <button className="input-button special-button" onClick={() => navigate("/findbuddy")}>
            Find Gym Buddy
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserHome;



