import React, { useState } from 'react';
import axios from 'axios';
import '../Css/Forgot.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [error, setError] = useState('');
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!email || !currentPassword || !newPassword || !repeatPassword) {
            setError('Please fill out all details.');
            return;
        }
    
        console.log('Submitted:', { email, currentPassword, newPassword, repeatPassword });
    
        axios.patch('http://localhost:8181/birthday/api/v1/authentication/forgot-password', {
            email: email,
            currentPassword: currentPassword,
            newPassword: newPassword,
            confirmPassword: repeatPassword
        })
        .then(response => {
            console.log('Reset Password Response:', response.data);
            // Add any success message or redirection here
        })
        .catch(error => {
            console.error('Reset Password Error:', error.response.data.message);
            setError(error.response.data.message);
        });
    };
    

    return (
        <div className="bg1">
        <div className="containerforgot">
            <div className="forgotheading">
                <div className='zero'>
                    <label>Forgot Password</label>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>
                        <span>Email:</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </label>
                    <label>
                        <span>Current Password:</span>
                        <div className="password-input">
                            <input
                                type={showCurrentPassword ? 'text' : 'password'}
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="Enter your current password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                className="password-toggle"
                            >
                                {showCurrentPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </label>
                    <label>
                        <span>New Password:</span>
                        <div className="password-input">
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter your new password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="password-toggle"
                            >
                                {showNewPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </label>
                    <label>
                        <span>Repeat Password:</span>
                        <div className="password-input">
                            <input
                                type={showRepeatPassword ? 'text' : 'password'}
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                placeholder="Repeat your new password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                                className="password-toggle"
                            >
                                {showRepeatPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </label>
                    {error && <p className="error">{error}</p>}
                    <button1 className='jivi' type="submit">Reset Password</button1>
                </form>
            </div>
        </div>
        </div>
    );
};

export default ForgotPassword;
