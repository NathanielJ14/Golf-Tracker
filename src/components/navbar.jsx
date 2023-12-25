import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Golf Tracker</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/">Home</a>
                        <a className="nav-link" href="/dashboard">Dashboard</a>
                        <a className="nav-link" href="/newgame">New Game</a>
                    </div>
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link" href="/register">Register</a>
                        <a className="nav-link" href="/login">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
