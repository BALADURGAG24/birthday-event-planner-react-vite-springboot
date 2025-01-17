import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Css/Signup.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    async function onSubmit(event) {
        event.preventDefault();
        const username = event.target[0].value;
        const email = event.target[1].value;
        const mobileNumber = event.target[4].value;

        if (!username || !email || !password || !confirmPassword || !mobileNumber) {
            setErrorMessage('Please fill in all fields.');
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8181/birthday/api/v1/authentication/register', {
                name: username,
                email,
                password,
                mobileNumber,
            });
            console.log('Signup success', response.data);
            navigate('/');
        } catch (error) {
            console.error('Signup error', error.response.data);
            setErrorMessage('Failed to register. Please try again.');
        }
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        if (confirmPassword && event.target.value !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
        } else {
            setErrorMessage(null);
        }
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        if (event.target.value !== password) {
            setErrorMessage('Passwords do not match.');
        } else {
            setErrorMessage(null);
        }
    };

    return (
        <div className="bg1">
            <div className="containersignup">
                <form onSubmit={onSubmit}>
                    <div className="signupheading">
                        <label>Sign Up</label>
                    </div>
                    <p1>
                        <div className="sideheadingsignup">
                            Already Have An Account <Link to="/"> Sign in</Link>
                        </div>
                    </p1>
                    <div className="signupemail">Username:</div>
                    <input className="signupemailfield" type="text" placeholder="Enter Username" required></input>
                    <div className="signupemail">Email:</div>
                    <input className="signupemailfield" type="text" placeholder="Enter Email" required></input>
                    <div className="signupemail">Password:</div>
                    <div className="password-wrapper">
                        <input
                            className="signupemailfield"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter password"
                            onChange={handlePasswordChange}
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
                    <div className="signupemail">Confirm Password:</div>
                    <div className="password-wrapper">
                        <input
                            className="signupemailfield"
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Enter Confirm password"
                            onChange={handleConfirmPasswordChange}
                            required
                        ></input>
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? '🙈' : '👁️'}
                        </button>
                    </div>
                    <div className="signupemail">Enter Mobile Number</div>
                    <input className="signupemailfield" type="number" placeholder="Enter Mobile Number" required></input>
                    <button type="submit" name="signup" className="signupbutton">
                        <div className="signupbuttonletterinside">Sign Up</div>
                    </button>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                </form>
            </div>
        </div>
    );
};

export default SignUp;
