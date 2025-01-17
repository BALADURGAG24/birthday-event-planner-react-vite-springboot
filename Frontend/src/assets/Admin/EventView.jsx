import React, { useState, useEffect } from 'react';
import '../Css/StoryPage.css';

function FeedPage() {
  const [eventviews, seteventviews] = useState([]);

  useEffect(() => {
    // Dummy data for demonstration
    const dummyeventviews = [
      { fid: 1, eventname: 'Event 1', name: 'John Doe', address: '123 Main St', homeaddress: '456 Elm St', mobile: '555-555-5555', email: 'john.doe@example.com', eventAddress: '456 Elm St', eventDate: '2022-01-01', eventTime: '12:00 PM', numPeople: 5, category: 'veg', vegQuantity: 3, nonVegQuantity: null, mehandi: true, djParty: false, magicShow: true, gameShow: false },
      { fid: 2, eventname: 'Event 2', name: 'Jane Smith', address: '456 Elm St', homeaddress: '789 Oak St', mobile: '666-666-6666', email: 'jane.smith@example.com', eventAddress: '789 Oak St', eventDate: '2022-02-02', eventTime: '1:00 PM', numPeople: 3, category: 'nonveg', vegQuantity: null, nonVegQuantity: 2, mehandi: false, djParty: true, magicShow: false, gameShow: true },
    ];
    seteventviews(dummyeventviews);
  }, []);

  const handleDelete = (fid) => {
    // Dummy delete function for demonstration
    seteventviews(eventviews.filter((eventview) => eventview.fid !== fid));
  };

  return (
    <div className="story-container1">
      <div className="story-list">
        <h2>Eventview List</h2>
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Name</th>
              <th>Address</th>
              <th>Home Address</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Event Address</th>
              <th>Event Date</th>
              <th>Event Time</th>
              <th>Number of People</th>
              <th>Category</th>
              <th>Veg Quantity</th>
              <th>Non-Veg Quantity</th>
              <th>Mehandi</th>
              <th>DJ Party</th>
              <th>Magic Show</th>
              <th>Game Show</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {eventviews.map((eventview) => (
              <tr key={eventview.fid}>
                <td>{eventview.eventname}</td>
                <td>{eventview.name}</td>
                <td>{eventview.address}</td>
                <td>{eventview.homeaddress}</td>
                <td>{eventview.mobile}</td>
                <td>{eventview.email}</td>
                <td>{eventview.eventAddress}</td>
                <td>{eventview.eventDate}</td>
                <td>{eventview.eventTime}</td>
                <td>{eventview.numPeople}</td>
                <td>{eventview.category}</td>
                <td>{eventview.vegQuantity}</td>
                <td>{eventview.nonVegQuantity}</td>
                <td>{eventview.mehandi ? 'Yes' : 'No'}</td>
                <td>{eventview.djParty ? 'Yes' : 'No'}</td>
                <td>{eventview.magicShow ? 'Yes' : 'No'}</td>
                <td>{eventview.gameShow ? 'Yes' : 'No'}</td>
                <td>
                  <button className='ddb' onClick={() => handleDelete(eventview.fid)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeedPage;
