import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone_number: '',
        full_name: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/register/', formData);
            console.log(response.data);
            alert('Registration successful');
            navigate('/login');
        } catch (error) {
            console.error(error);
            alert('Registration failed');
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <div className="register-header">
                    <h2>Create Account</h2>
                    <p>Please fill in your information</p>
                </div>
                
                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="full_name"
                            placeholder="Full Name"
                            value={formData.full_name}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone_number"
                            placeholder="Phone Number"
                            value={formData.phone_number}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>
                    
                    <button type="submit" className="register-button">
                        Create Account
                    </button>
                </form>
                
                <div className="login-link">
                    Already have an account? <a href="/login">Sign in</a>
                </div>
            </div>
        </div>
    );
};

export default Register;