import React, { useState, useEffect } from 'react';
import LogoutButton from '../components/logout';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if the user is logged in when the component mounts
        const token = localStorage.getItem('token');
        setIsLoggedIn(Boolean(token));
    }, []);

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Golf Tracker</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        {isLoggedIn && (
                            // If the user is logged in, show the Dashboard and New Game links
                            <>
                                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                                <Link to="/newgame" className="nav-link">New Game</Link>
                            </>
                        )}
                    </div>
                    <div className="navbar-nav ms-auto">
                        {!isLoggedIn ? (
                            // If the user is not logged in, show Register and Login links
                            <>
                                <Link to="/register" className="nav-link">Register</Link>
                                <Link to="/login" className="nav-link">Login</Link>
                            </>
                        ) : (
                            // If the user is logged in, show the LogoutButton
                            <LogoutButton />
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
