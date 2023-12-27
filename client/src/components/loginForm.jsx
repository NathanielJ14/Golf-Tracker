import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', formData);
            console.log('Login response:', response.data);

            // Store the token in localStorage (or sessionStorage)
            localStorage.setItem('token', response.data.token);

            // Redirect the user to the dashboard page upon successful login
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed:', error.message);

            // Display an alert with the error message
            window.alert(`Login failed: ${error.message}`);
        }
    };

    return (
        <div className='d-flex text-white bgAuth'>
            <div className='container d-flex w-50 h-100 mx-auto flex-column'>
                <h1 className='text-center mt-4'>Login</h1>
                <div className='container mt-3 formBg'>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
