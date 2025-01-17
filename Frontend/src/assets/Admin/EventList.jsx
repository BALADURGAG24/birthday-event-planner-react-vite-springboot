import React, { useState, useEffect } from 'react';
import '../Css/StoryPage.css';

function ShortStoryPage() {
  const [events, setEvents] = useState([]);
  const [event, setEvent] = useState({
    eventid: null,
    eventname: '',
    eventphoto: '',
    eventprice: '',
  });
  const [imagePreview, setImagePreview] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({
    eventname: '',
    eventphoto: '',
    eventprice: '',
  });

  useEffect(() => {
    const dummyEvents = [
      { eventid: 1, eventname: 'Event 1', eventphoto: 'path/to/photo1.jpg', eventprice: '$100' },
      { eventid: 2, eventname: 'Event 2', eventphoto: 'path/to/photo2.jpg', eventprice: '$150' },
      // Add more dummy data as needed
    ];
    setEvents(dummyEvents);
  }, []);

  const handleCreate = () => {
    // Reset error messages
    setErrors({
      eventname: '',
      eventphoto: '',
      eventprice: '',
    });

    // Check for empty fields
    if (!event.eventname || !event.eventphoto || !event.eventprice) {
      if (!event.eventname) {
        setErrors({ ...errors, eventname: 'Event name is required' });
      }
      if (!event.eventphoto) {
        setErrors({ ...errors, eventphoto: 'Event photo URL is required' });
      }
      if (!event.eventprice) {
        setErrors({ ...errors, eventprice: 'Event price is required' });
      }
      return;
    }

    // Create a new event
    const newEvent = { ...event, eventid: events.length + 1 };
    setEvents([...events, newEvent]);
    clearForm();
  };

  const handleEdit = (selectedEvent) => {
    // Set the form for editing
    setEvent(selectedEvent);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    // Update the selected event
    const updatedEvents = events.map((ev) => (ev.eventid === event.eventid ? event : ev));
    setEvents(updatedEvents);
    clearForm();
    setIsEditing(false);
  };

  const handleDelete = (eventid) => {
    // Delete an event
    const filteredEvents = events.filter((ev) => ev.eventid !== eventid);
    setEvents(filteredEvents);
  };

  const clearForm = () => {
    setEvent({
      eventid: null,
      eventname: '',
      eventphoto: '',
      eventprice: '',
    });
    setImagePreview('');
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });

    // Update the image preview when the eventphoto input changes
    if (name === 'eventphoto') {
      setImagePreview(value);
    }
  };

  return (
    <div className="story-container1">
      <div className="story-list">
        <h2>Event List</h2>
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Photo</th>
              <th>Event Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((ev) => (
              <tr key={ev.eventid}>
                <td>
                  {isEditing && event.eventid === ev.eventid ? (
                    <input
                      type="text"
                      name="eventname"
                      value={event.eventname}
                      onChange={handleFieldChange}
                    />
                  ) : (
                    ev.eventname
                  )}
                </td>
                <td>
                  {isEditing && event.eventid === ev.eventid ? (
                    <>
                      <input
                        type="text"
                        name="eventphoto"
                        placeholder="Event Photo URL"
                        value={event.eventphoto}
                        onChange={handleFieldChange}
                      />
                      {event.eventphoto && (
                        <img
                          src={event.eventphoto}
                          alt="Event Photo"
                          width="100"
                          height="100"
                        />
                      )}
                    </>
                  ) : (
                    <img
                      src={ev.eventphoto}
                      alt="Event Photo"
                      width="200"
                      height="150"
                    />
                  )}
                </td>
                <td>
                  {isEditing && event.eventid === ev.eventid ? (
                    <input
                      type="text"
                      name="eventprice"
                      placeholder="Event Price"
                      value={event.eventprice}
                      onChange={handleFieldChange}
                    />
                  ) : (
                    ev.eventprice
                  )}
                </td>
                <td>
                  {isEditing && event.eventid === ev.eventid ? (
                    <>
                      <div className="yei">
                        <button className="edbb" onClick={handleUpdate}>Update</button>
                        <button className="ddb" onClick={() => setIsEditing(false)}>Cancel</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="yei">
                        <button className="edb" onClick={() => handleEdit(ev)}>Edit</button>
                        <button className="ddb" onClick={() => handleDelete(ev.eventid)}>Delete</button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="create-story">
        <h2>Create Event</h2>
        <input
          type="text"
          name="eventname"
          placeholder="Event Name"
          value={event.eventname}
          onChange={handleFieldChange}
        />
        {errors.eventname && (
          <div className="error-message">{errors.eventname}</div>
        )}

        <input
          type="text"
          name="eventphoto"
          placeholder="Event Photo URL"
          value={event.eventphoto}
          onChange={handleFieldChange}
        />
        {errors.eventphoto && (
          <div className="error-message">{errors.eventphoto}</div>
        )}

        <input
          type="text"
          name="eventprice"
          placeholder="Event Price"
          value={event.eventprice}
          onChange={handleFieldChange}
        />
        {errors.eventprice && (
          <div className="error-message">{errors.eventprice}</div>
        )}

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Event Photo Preview"
            width="100"
            height="100"
          />
        )}
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}

export default ShortStoryPage;
