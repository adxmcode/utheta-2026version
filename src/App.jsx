import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.css';

function App() {
    // null when logged out, object when logged in
    const [user, setUser] = useState(null);

    return (
        <Router>
           <div className = "app-container">
             <Navbar />
             <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={user ? <Navigate to="/" /> : <Login setUser={setUser} />} />
                    <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup setUser={setUser} />} />
                </Routes>
            </main>
            <Routes>
                {/* Additional routes can be added here */}
                </Routes>
           </div>
        </Router>
    );
}

export default App;

// click Home:
// - if user doesn't have account, go to login page //
// else go automatically to home under user //

// click Login://
// - go to Login if user account exists //

// click Sign Up://
// - go to Sign Up if user account doesn't exist //