// src/components/AddBuddy.js
import React, { useState } from 'react';
import axios from 'axios';

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
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={userId}
                onChange={e => setUserId(e.target.value)}
                placeholder="User ID"
                required
            />
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <button type="submit">Add Buddy</button>
        </form>
    );
};

export default AddBuddy;
