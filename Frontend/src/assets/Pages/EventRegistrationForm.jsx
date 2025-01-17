import React, { useState } from 'react';
import axios from 'axios';
import '../Css/EventRegistrationForm.css';
import Footer from './Footer';
import Navbar from './Navbar';

const EventRegistrationForm = () => {
  const [formData, setFormData] = useState({
    eventId: 0,
    eventName: '',
    applicantName: '',
    applicantAddress: '',
    applicantMobile: '',
    applicantEmail: '',
    eventAddress: '',
    eventDate: '',
    eventTime: '',
    eventMenuId: 0,
    addonId: 0,
    eventCost: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:8181/admin/addEvent', formData, {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQ1VTVE9NRVIiLCJzdWIiOiJsZWdvQGdtYWlsLmNvbSIsImlzcyI6ImJpcnRoZGF5IiwiaWF0IjoxNzE0MTkzNzAxLCJleHAiOjE3MTQyMDIzNDF9.jEqbJ2DO1JJxiBgul7rSm0sIbVNh4cgEDy-A4tgbLbQ'
        }
      });
      console.log('Form submitted successfully:', response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Form submission failed. Please try again.');
    }
  
    setFormData({
      eventId: 0,
      eventName: '',
      applicantName: '',
      applicantAddress: '',
      applicantMobile: '',
      applicantEmail: '',
      eventAddress: '',
      eventDate: '',
      eventTime: '',
      eventMenuId: 0,
      addonId: 0,
      eventCost: '',
    });
  };
  

  return (
    <div>
      <Navbar />
      <div>
        <br></br> <br></br> <br></br> <br></br>
        <form className="event-form-container" onSubmit={handleSubmit}>
          <label>
            Event Name:
            <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} required />
          </label>
          <label>
            Applicant Name:
            <input type="text" name="applicantName" value={formData.applicantName} onChange={handleChange} required />
          </label>
          <label>
            Address:
            <input type="text" name="applicantAddress" value={formData.applicantAddress} onChange={handleChange} required />
          </label>
          <label>
            Applicant Mobile No:
            <input type="text" name="applicantMobile" value={formData.applicantMobile} onChange={handleChange} required />
          </label>
          <label>
            Applicant Email ID:
            <input type="email" name="applicantEmail" value={formData.applicantEmail} onChange={handleChange} required />
          </label>
          <label>
            Event Address:
            <input type="text" name="eventAddress" value={formData.eventAddress} onChange={handleChange} required />
          </label>
          <label>
            Date of the Event:
            <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
          </label>
          <label>
            Time of the Event:
            <input type="time" name="eventTime" value={formData.eventTime} onChange={handleChange} required />
          </label>
          <label>
            Event Cost:
            <input type="text" name="eventCost" value={formData.eventCost} onChange={handleChange} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
      <br></br> <Footer /> </div>
  );
};

export default EventRegistrationForm;
