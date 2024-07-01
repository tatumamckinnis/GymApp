import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState('Fetching time...');

  useEffect(() => {
    const interval = setInterval(() => {
      fetchTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchTime = () => {
    axios.get('http://localhost:8080/api/time')
      .then(response => {
        setCurrentTime(response.data.trim());
      })
      .catch(error => {
        console.error('Error fetching time:', error);
        setCurrentTime('Error fetching time');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Current Time from Spring Boot</h1>
        <p>{currentTime}</p>
      </header>
    </div>
  );
}

export default App;