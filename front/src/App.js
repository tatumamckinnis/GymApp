import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FindBuddy from './components/FindBuddy';
import UserHome from './components/UserHome';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false); // State to manage logged-in status
  const [email, setEmail] = useState(''); // State to hold user's email (optional)

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} setEmail={setEmail} />}
        />
        <Route path="/findbuddy" element={<FindBuddy />} />
        <Route path="/userhome" element={<UserHome email={email} />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;






