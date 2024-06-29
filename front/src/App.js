import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8080/api/time')
      .then(response => {
        console.log('Response:', response); // Log the entire response object
        setCurrentTime(response.data.trim());
      })
      .catch(error => {
        console.error('Error fetching time:', error);
      });
  }, []);

  console.log('Current Time:', currentTime); // Log current time state

  return (
    <div className="App">
      <header className="App-header">
        <h1>Current Time from Spring Boot</h1>
        <p>{currentTime ? `The current time is: ${currentTime}` : 'Fetching time...'}</p>
      </header>
    </div>
  );
}

export default App;