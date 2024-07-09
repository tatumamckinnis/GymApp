// src/components/Buddies.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Buddies = ({ userId }) => {
    const [buddies, setBuddies] = useState([]);

    useEffect(() => {
        axios.get(`/api/buddies/${userId}`)
            .then(response => {
                setBuddies(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the buddies!", error);
            });
    }, [userId]);

    return (
        <div>
            <h2>Your Gym Buddies</h2>
            <ul>
                {buddies.map(buddy => (
                    <li key={buddy.id}>{buddy.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Buddies;
