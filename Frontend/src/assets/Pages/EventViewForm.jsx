import React, { useEffect, useState } from 'react';
import '../Css/EventViewForm.css'; // Import the CSS file for styling
import Footer from './Footer';
import Navbar from './Navbar';
const ViewForm = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('eventFormData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleCancelEvent = () => {
    localStorage.removeItem('eventFormData');
    setFormData(null);
  };

  if (!formData) {
    return <div className="container">No data available.</div>;
  }

  return (
    <div>  <Navbar />
    <br></br> <br></br> <br></br>
    <div className="container">
      <h2>Event Registration Details:</h2>
      <p><strong>Applicant Name:</strong> {formData.name}</p>
      <p><strong>Applicant Address:</strong> {formData.address}</p>
      <p><strong>Applicant Mobile Number:</strong> {formData.mobile}</p>
      <p><strong>Applicant Email ID:</strong> {formData.email}</p>
      <p><strong>Event Address:</strong> {formData.eventAddress}</p>
      <p><strong>Date of the Event:</strong> {formData.eventDate}</p>
      <p><strong>Time of the Event:</strong> {formData.eventTime}</p>
      <p><strong>Number of People:</strong> {formData.numPeople}</p>
      <p><strong>Category:</strong> {formData.category}</p>
      {formData.category === 'veg' && <p><strong>Veg Quantity:</strong> {formData.vegQuantity}</p>}
      {formData.category === 'nonveg' && <p><strong>Non Veg Quantity:</strong> {formData.nonVegQuantity}</p>}
      <p><strong>Add-ons:</strong></p>
      {formData.mehandi && <p>Mehandi</p>}
      {formData.djParty && <p>DJ Party</p>}
      {formData.magicShow && <p>Magic Show</p>}
      {formData.gameShow && <p>Game Show</p>}
      <button onClick={handleCancelEvent}>Cancel Event</button>
    </div>  <br></br> <Footer /> </div>
  );
};

export default ViewForm;
