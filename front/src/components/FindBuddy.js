import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FindBuddy = () => {
  const [selectedWorkout, setSelectedWorkout] = useState('');
  const [buddies, setBuddies] = useState([]);

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Replace with logic to fetch buddies based on selected workout
    // For now, let's mock some buddies
    const mockBuddies = [
      { id: 1, name: 'Name1', email: 'name1@example.com' },
      { id: 2, name: 'Name2', email: 'name2@example.com' }
    ];
    setBuddies(mockBuddies);
  };

  return (
    <div className="mainContainer" style={{ backgroundColor: "#003087", color: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="contentContainer">
        <div className="titleContainer" style={{ textAlign: 'center'}}>
          <div>Find a Fitness Buddy</div>
          <div style={{ fontSize: '1.5em', textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>
            Select your preferred workout to find buddies
          </div>
        </div>
        <form onSubmit={handleFormSubmit} style={{ marginTop: '20px', textAlign: 'center' }}>
          <label htmlFor="workoutSelect" style={{ fontSize: '1.2em', marginRight: '10px' }}>Select Workout:</label>
          <select id="workoutSelect" value={selectedWorkout} onChange={(e) => setSelectedWorkout(e.target.value)} style={{ fontSize: '1.2em', padding: '10px' }}>
            <option value="">Select</option>
            <option value="legs">Legs</option>
            <option value="arms">Arms</option>
            <option value="abs">Abs</option>
            <option value="cardio">Cardio</option>
            <option value="yoga">Yoga</option>
          </select>
          <br />
          <button type="submit" className="inputButton" style={{ fontSize: '1.2em', padding: '10px 20px', marginTop: '10px', backgroundColor: '#005BB5', color: 'white', border: 'none', borderRadius: '5px' }}>Find Buddies</button>
        </form>
        {buddies.length > 0 && (
          <div className="buddiesContainer" style={{ marginTop: '20px', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold', marginBottom: '10px' }}>Matching Buddies:</div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {buddies.map(buddy => (
                <li key={buddy.id} style={{ marginBottom: '10px' }}>
                  <div>Name: {buddy.name}</div>
                  <div>Email: {buddy.email}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
        </div>
      </div>
    </div>
  );
};

export default FindBuddy;




