import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../Css/ProfileDashboard.css';

const ProfileDashboard = () => {
  const [showModal, setShowModal] = useState(true);
  const adminUser = localStorage.getItem('adminUser');
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const mobileNumber = localStorage.getItem('mobileNumber');
  const photoUrl = localStorage.getItem('photoUrl'); 

  const handleClose = () => setShowModal(false);

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Body>
      <br></br>  <br></br>  <br></br>   <br></br>   <br></br>
        <div className="profile-container">
        <Modal.Title>Profile Dashboard</Modal.Title>
        <br></br>
          <div className="profile-info">
            <span className="profile-label">Admin/User:</span>
            <span className="profile-data">{adminUser}</span>
          </div>
          <div className="profile-info">
            <span className="profile-label">Username:</span>
            <span className="profile-data">{username}</span>
          </div>
          <div className="profile-info">
            <span className="profile-label">Email:</span>
            <span className="profile-data">{email}</span>
          </div>
          <div className="profile-info">
            <span className="profile-label">Mobile Number:</span>
            <span className="profile-data">{mobileNumber}</span>
          </div>
          {photoUrl && <img src={photoUrl} alt="Profile" className="profile-photo" />}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button  variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProfileDashboard;
