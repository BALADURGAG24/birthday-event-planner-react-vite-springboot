import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Css/Signin.css';

const Login = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    async function onSubmit(event) {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;

        if (!email || !password) {
            setErrorMessage('Please enter both email and password.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8181/birthday/api/v1/authentication/login', {
                email,
                password,
            });
            console.log('Login success', response.data);
            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.token); // Store the token in local storage
            navigate('/home');
        } catch (error) {
            console.error('Login error', error.response.data);
            setErrorMessage('Failed to login. Please check your credentials.');
        }
    }

    return (
        <div className="bg1">
            <div className="containersignin">
                <form onSubmit={onSubmit}>
                    <div className="signinheading">
                        <label>Sign In</label>
                    </div>
                    <p1>
                        <div className="sideheadingsignin">
                            Don't have an account? <Link to="/signup"> Signup</Link>
                        </div>
                    </p1>
                    <div className="signinemail">Email:</div>
                    <input className="signinemailfield" type="text" placeholder="Enter Email" required></input>
                    <div className="signinpassword">Password:</div>
                    <div className="password-wrapper">
                        <input
                            className="signinemailfield"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter password"
                            required
                        ></input>
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </button>
                    </div>
                    <button type="submit" name="signIn" className="signinbutton">
                        <div className="signinbuttonletterinside">Sign in</div>
                    </button>
                    <p1>
                        <div className="siginforgotchange">
                            Forgot Password - <Link to="/forgot">Change</Link>
                        </div>
                        <div className="siginadminlogin">
                            Admin - <Link to="/adminlogin">Go To</Link>
                        </div>
                    </p1>
                    {errorMessage && <div className="signinerror-message">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
};

export default Login;
