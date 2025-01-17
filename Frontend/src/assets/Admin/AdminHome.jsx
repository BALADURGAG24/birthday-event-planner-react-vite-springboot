import React, { useState, useEffect } from 'react';
import '../Css/AdminHome.css';
import { Link } from 'react-router-dom';

function Dboverview() {
  const [users, setUsers] = useState([]);
  const [stories, setStories] = useState([]);
  const [shortstories, setShortStories] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    setUsers([{ name: 'User 1' }, { name: 'User 2' }, { name: 'User 3' }]);
    setStories([{ title: 'Story 1' }, { title: 'Story 2' }, { title: 'Story 3' }]);
    setShortStories([{ title: 'Short Story 1' }, { title: 'Short Story 2' }]);
    setFeedbacks([{ text: 'Feedback 1' }, { text: 'Feedback 2' }]);
  }, []);

  return (
    <div className="dbobg">
      <div className="dbmainc">
        <div className="code">
          <br />
          <br />
          <div className="cpr2">
            <br />
            <div className="nu">Number of Users</div>
            {users.length}
          </div>
          <div className="cpr">
            <br />
            <div className="ns">Number of Events</div>
            {stories.length}
          </div>
          <div className="cpr3">
            <br />
            <div className="nu">Number Of Events Registered</div>
            {shortstories.length}
          </div>
          <div className="cpr1">
            <br />
            <div className="nf"> Number of Feedbacks </div>
            {feedbacks.length}
          </div>
          <img className="what" src="https://img.freepik.com/free-vector/dashboard-element-collection_23-2148399421.jpg" alt="database" />
        </div>
      </div>
      <div className="dbside">
        <Link to="/Home"><b>Home</b></Link>
        <Link to="/adminuserdetails"><b>User info</b></Link>
        <Link to="/eventlistadmin"><b>Events info</b></Link>
        <Link to="/eventview"><b>Events Registered</b></Link>
        <Link to="/feedback"><b>Feedback info</b></Link>-
      </div>
    </div>
  );
}

export default Dboverview;
