import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/why-us">Why Us</Link></li>
                    <li><Link to="/what-we-do">What We Do</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/contactus">Contact Us</Link></li>
                    <li><Link to="/terms">Terms&Condition</Link></li>
                    <li><Link to="/privacy">Privacy&Policy</Link></li>
                </ul>
            </div>
            <div className="footer-column">
    <h3>What We Do</h3>
    <ul>
        <li><Link to="/birthday-party">Birthday Party</Link></li>
        <li><Link to="/themed-birthday-parties">Themed Birthday Parties</Link></li>
        <li><Link to="/birthday-surprise-planner">Birthday Surprise Planner</Link></li>
        <li><Link to="/cake-smash-photography">Cake Smash Photography</Link></li>
        <li><Link to="/birthday-invitations">Birthday Invitations</Link></li>
        <li><Link to="/birthday-event-decor">Birthday Event Decor</Link></li>
        <li><Link to="/entertainment-services">Entertainment Services</Link></li>
        <li><Link to="/birthday-event-catering">Birthday Event Catering</Link></li>
        <li><Link to="/photobooth-rental">Photo Booth Rental</Link></li>
    </ul>
</div>
<div className="footer-column">
    <h3>Unique Offerings</h3>
    <ul>
        <li><Link to="/birthday-experience-packages">Birthday Experience Packages</Link></li>
        <li><Link to="/personalized-birthday-gifts">Personalized Birthday Gifts</Link></li>
        <li><Link to="/birthday-event-planning-app">Birthday Event Planning App</Link></li>
        <li><Link to="/birthday-cake-designer">Birthday Cake Designer</Link></li>
        <li><Link to="/virtual-birthday-parties">Virtual Birthday Parties</Link></li>
        <li><Link to="/birthday-party-games">Birthday Party Games</Link></li>
        <li><Link to="/birthday-event-photography">Birthday Event Photography</Link></li>
        <li><Link to="/birthday-event-transportation">Birthday Event Transportation</Link></li>
        <li><Link to="/after-party-cleanup">After Party Cleanup</Link></li>
    </ul>
</div>

            <div className="footer-column">
                <h3>Contact Us</h3>
                <p>No.2, Ground floor, D.J.Nagar, Hopescollage, Near Water Tank, Coimbatore-641 004.</p>
                <p>Email: enquiry@bambooevents.co.in</p>
                <p>Phone: +91 99949 24984</p>
            </div>
        </footer>
    );
};

export default Footer;
