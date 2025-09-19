import React, { useState } from 'react';
import axios from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/login/', {
                username,
                password,
            },
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            });
            localStorage.setItem(ACCESS_TOKEN, response.data.access);
            localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
            navigate('/');
            console.log(response.data);
        } catch (error) {
            console.error(error);
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-700">Welcome Back</h2>
                    <p className="text-gray-500">Please sign in to your account</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:black focus:black"
                        />
                    </div>
                    
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:black focus:border-black"
                        />
                    </div>
                    
                    <button type="submit" className="w-full text-lg font-semibold py-3 rounded-xl transition-all bg-black text-white border-2 border-white hover:bg-white hover:text-black hover:border-black">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
