import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FindBuddy() {
    
    const navigate = useNavigate()

    return(
        <div className="buttonContainer">
            <input
              className="inputButton"
              type="button"
              onClick={navigate("/")}
              value="Back Home"
              style={{ fontSize: '3.0em', padding: '15px 25px', marginTop: '20px' }}
            />
          </div>
    )
}

export default FindBuddy