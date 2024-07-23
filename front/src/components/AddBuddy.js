import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import the CSS file

const AddBuddy = () => {
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/api/buddies', { userId, email })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error("There was an error adding the buddy!", error);
            });
    };

    return (
        <div className="find-buddy-container">
            <h2>Add Buddy</h2>
            <form className="find-buddy-form" onSubmit={handleSubmit}>
                <input
                    type="number"
                    className="input-field"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                    placeholder="User ID"
                    required
                />
                <input
                    type="email"
                    className="input-field"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <button className="input-button" type="submit">Add Buddy</button>
            </form>
        </div>
    );
};

export default AddBuddy;
