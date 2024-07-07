import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function FindBuddy() {
    
    const navigate = useNavigate()
    const [preference, setPreference] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/findbuddy')
            .then(response => response.json())
            .then(data => {
                setPreference(data);
            })})

    return(
        <>
        <div>
            <h1>Preferences</h1>
            <ul>
                {preference.map((preference, index) => (
                    <li key={index}>
                        Time: {preference.time}, Length: {preference.length} mins
                    </li>
                ))}
            </ul>
        </div>
        <div className="buttonContainer">
            <input
              className="inputButton"
              type="button"
              onClick={() => {navigate("/login")}} /* edit button and navigation */
              value="Back Home"
              style={{ fontSize: '3.0em', padding: '15px 25px', marginTop: '20px' }}
            />
          </div>
          </>
    )
}

export default FindBuddy