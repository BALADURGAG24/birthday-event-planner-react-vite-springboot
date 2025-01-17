import React, { useState } from 'react';
import '../Css/ContactUs.css';
import Footer from './Footer';
import Navbar from './Navbar';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
        phoneNumber: '',
        budget: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>  <Navbar />
        <br></br>  <br></br> <br></br>  <br></br>
        <div className="contact-us">
        <h1>Get The Party Started</h1>
        <h4 className='centrehari'>Bamboo Events Planning and decor is one of Coimbatore's best event management companies, assists clients in making their events grandly memorable throughout their lifetime. Share your contact information, our event organizing team will get back to you shortly.</h4>
        <hr></hr>    <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Your Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Your Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Location:
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Your Number:
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Budget:
                    <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Your Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form> <br></br><hr></hr> 
            <div className="social-media-links">
                <h3>Connect with us:</h3>
                <ul>
                    <li><a href="https://facebook.com/bambooevents">Facebook</a></li>
                    <li><a href="https://twitter.com/bambooevents">Twitter</a></li>
                    <li><a href="https://instagram.com/bambooevents">Instagram</a></li>
                </ul>
            </div><hr></hr> 
            <div className="contact-info">
                <h3>Contact Information:</h3>
                <p>
                    Address: No.2, Ground floor, D.J.Nagar, Hopescollage, Near Water Tank, Coimbatore-641 004.
                </p>
                <p>
                    E-Mail: info@bambooevents.co.in, enquiry@bambooevents.co.in
                </p>
                <p>
                    Phone: +91 99949 24984
                </p>
            </div>
            </div>
            <br></br>  <br></br>   <Footer /> 
        </div>
    );
};

export default ContactUs;
