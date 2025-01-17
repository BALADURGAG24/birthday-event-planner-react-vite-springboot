import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/aboutus">About Us</Link>
      <Link to="/eventlist">EventList</Link>
      <Link to="/services">Services</Link>
      <div className="dropdown">
        <div className="dropbtn">Location</div>
        <div className="dropdown-content">
          <Link to="/eventlist">Mumbai</Link>
          <Link to="/eventlist">Delhi</Link>
          <Link to="/eventlist">Chennai</Link>
          <Link to="/eventlist">Hyderabad</Link>
          <Link to="/eventlist">Kolkata</Link>
          <Link to="/eventlist">Lucknow</Link>
          <Link to="/eventlist">Ahmedabad</Link>
          <Link to="/eventlist">Bengaluru</Link>
          <Link to="/eventlist">Jaipur</Link>
          <Link to="/eventlist">Pune</Link>
          <Link to="/eventlist">Surat</Link>
          <Link to="/eventlist">Indore</Link>
          <Link to="/eventlist">Kanpur</Link>
          <Link to="/eventlist">Chandigarh</Link>
          <Link to="/eventlist">Kochi</Link>
          <Link to="/eventlist">Vadodara</Link>
        </div>
      </div>
      <Link to="/faq">Faq</Link>
      <Link to="/eventviewform">My Events</Link>
      <div className='my-events'>
      <div className="dropdown">
        <div className="dropbtn">Profile</div>
        <div className="dropdown-content">
          <Link to="/profiledashboard">Profile</Link>
          <Link to="/eventviewform">My Events</Link>
          <Link to="/">Logout</Link>
    </div></div></div></div>
  );
}

export default Navbar;
