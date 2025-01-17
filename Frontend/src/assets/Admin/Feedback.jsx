import React, { useState, useEffect } from 'react';
import '../Css/StoryPage.css';

function FeedPage() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    // Dummy data for demonstration
    const dummyFeedbacks = [
      { fid: 1, firstname: 'John', secondname: 'Doe', phoneNo: '123-456-7890', emailId: 'john.doe@example.com', query: 'Lorem ipsum dolor sit amet' },
      { fid: 2, firstname: 'Jane', secondname: 'Smith', phoneNo: '987-654-3210', emailId: 'jane.smith@example.com', query: 'Consectetur adipiscing elit' },
      // Add more dummy data as needed
    ];
    setFeedbacks(dummyFeedbacks);
  }, []);

  const handleDelete = (fid) => {
    // Dummy delete function for demonstration
    setFeedbacks(feedbacks.filter((feedback) => feedback.fid !== fid));
  };

  return (
    <div className="story-container1">
      <div className="story-list">
        <h2>Feedback List</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Phone No</th>
              <th>Email Id</th>
              <th>Query</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <tr key={feedback.fid}>
                <td>{feedback.firstname}</td>
                <td>{feedback.secondname}</td>
                <td>{feedback.phoneNo}</td>
                <td>{feedback.emailId}</td>
                <td>{feedback.query}</td>
                <td>
                  <button className='ddb' onClick={() => handleDelete(feedback.fid)}>Delete</button>
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
