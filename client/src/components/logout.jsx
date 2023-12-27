import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Make a request to the backend to logout
            const response = await axios.get('http://localhost:5000/api/logout');

            // Check if the user was logged in before the logout
            const wasLoggedIn = response.data.wasLoggedIn;

            // Remove the token from localStorage (or sessionStorage)
            localStorage.removeItem('token');

            // Redirect the user to the login page
            navigate('/login');

            // Show a message or perform additional actions based on whether the user was logged in
            if (wasLoggedIn) {
                console.log('User was logged in before logout.');
            } else {
                console.log('User was not logged in before logout.');
            }
        } catch (error) {
            console.error('Logout failed:', error.message);

            // Display an alert with the error message
            window.alert(`Logout failed: ${error.message}`);
        }
    };

    return (
        <button onClick={handleLogout} className="nav-link">
            Logout
        </button>
    );
};

export default LogoutButton;
