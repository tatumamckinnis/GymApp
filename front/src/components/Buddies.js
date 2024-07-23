import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import the CSS file

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
        <div className="find-buddy-container">
            <h2>Your Gym Buddies</h2>
            <ul className="buddies-list">
                {buddies.map(buddy => (
                    <li className="buddy-item" key={buddy.id}>
                        {buddy.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Buddies;
