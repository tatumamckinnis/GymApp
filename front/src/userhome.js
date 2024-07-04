import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function UserHome() {
    
    const navigate = useNavigate()

    return(
        <div className="buttonContainer">
            <input
              className="inputButton"
              type="button"
              onClick={navigate("/findbuddy")}
              value="Find Gym Buddy"
              style={{ fontSize: '3.0em', padding: '15px 25px', marginTop: '20px' }}
            />
          </div>
    )
}

export default UserHome