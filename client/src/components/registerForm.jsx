import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
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

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/users', formData);
            console.log('Registration response:', response.data);

            // Redirect the user to the /dashboard page upon successful registration
            navigate('/dashboard');
        } catch (error) {
            console.error('Registration failed:', error.message);

            // Display an alert with the error message
            window.alert(`Registration failed: ${error.message}`);
        }
    };

    return (
        <div className='d-flex text-white bgAuth'>
            <div className='container d-flex w-50 h-100 mx-auto flex-column'>
                <h1 className='text-center mt-4'>Create an account</h1>
                <div className='container mt-3 formBg'>
                    <form onSubmit={handleRegister}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" onChange={handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-success">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
