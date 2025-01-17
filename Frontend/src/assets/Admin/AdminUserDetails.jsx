import React, { useState, useEffect } from 'react';
import '../Css/StoryPage.css';

function UserPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const dummyUsers = [
      { uid: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'User', createdAt: '2022-01-01' },
      { uid: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin', createdAt: '2022-01-02' },
    ];
    setUsers(dummyUsers);
  }, []);

  const handleDelete = (uid) => {

    setUsers(users.filter((user) => user.uid !== uid));
  };

  return (
    <div className="story-container1">
      <div className="story-list">
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.uid}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button className='ddb' onClick={() => handleDelete(user.uid)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserPage;
