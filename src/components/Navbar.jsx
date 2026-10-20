import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <button className="logo-btn" onClick={ () => navigate('/') }>
                    UTheta
                </button>
            </div>
            <div className="nav-buttons">
                <button className="nav-btn" onClick={ () => navigate('/') }>
                    Home
                    </button>
                <button className="nav-btn btn-secondary" onClick={ () => navigate('/login') }>
                    Login
                </button>
                <button className="nav-btn btn-primary" onClick={ () => navigate('/signup') }>
                    Sign Up
                </button>
            </div>
            <div className="nav-user">
                {/* Placeholder for user info or logout button */}
            </div>
        </nav>
    );
}


export default Navbar;
