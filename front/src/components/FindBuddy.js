import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file

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
    <div className="find-buddy-container">
      <div className="find-buddy-content">
        <div className="find-buddy-title">
          <h1>Find a Fitness Buddy</h1>
          <h2>Select your preferred workout to find buddies</h2>
        </div>
        <form className="find-buddy-form" onSubmit={handleFormSubmit}>
          <label htmlFor="workoutSelect">Select Workout:</label>
          <select
            id="workoutSelect"
            value={selectedWorkout}
            onChange={(e) => setSelectedWorkout(e.target.value)}
            className="input-field"
          >
            <option value="">Select</option>
            <option value="legs">Legs</option>
            <option value="arms">Arms</option>
            <option value="abs">Abs</option>
            <option value="cardio">Cardio</option>
            <option value="yoga">Yoga</option>
          </select>
          <button type="submit" className="input-button">Find Buddies</button>
        </form>
        {buddies.length > 0 && (
          <div className="buddies-container">
            <h2>Matching Buddies:</h2>
            <ul className="buddies-list">
              {buddies.map(buddy => (
                <li className="buddy-item" key={buddy.id}>
                  <div>Name: {buddy.name}</div>
                  <div>Email: {buddy.email}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="link-container">
          <Link to="/" className="home-link">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default FindBuddy;





