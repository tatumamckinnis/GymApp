import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserHome() {
  const navigate = useNavigate();

  return (
    <>
    <div className="userName">
        <h1>Welcome Back!</h1>
    </div>
    <div className="newButton">
        <button className="specialButton" onClick={() => { navigate("/findbuddy") }}>
            Find Gym Buddy
        </button>
    </div>
    </>
  );
}

export default UserHome;

