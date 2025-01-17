import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Css/EventDisplay.css';
import Footer from './Footer';
import Navbar from './Navbar';
import '../Css/EventList.css';
const EventDisplay = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const photos = [
        'src/assets/Images/tress.jpg',
        'src/assets/Images/mountains.jpg',
        'src/assets/Images/tress.jpg',
        'src/assets/Images/mountains.jpg',
    ];
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPhotoIndex((prevIndex) =>
                prevIndex === photos.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleGetCallBack = () => {
        navigate('/eventform');
    };

    return (
        <div>  <Navbar />
        <br></br><div className='details'>
        <div className="event-container">
            <h1>END TO END EVENT PLANNERS</h1>
            <h2>Birthday Party Organizers</h2>
            <div className="">
                <img src={photos[currentPhotoIndex]} alt="Event" className="" />
            </div>
            <p>Birthday Party Organizers In Coimbatore</p>
            <p>Birthday Event Organizers</p>
            <p>Birthday Party theme Organizers</p>
            <p>Cartoon Theme Birthday Party Planners</p>
            <p>Great Birthday Themed Party</p>
            <p>Birthday Party Event Planner</p>
            <p>A birthday party is an important factor that each of us will always remember in our memories, and every person will try to remember the early memory as it is his birthday celebration which is more important than other days, probably one of the most special day for family members and most importantly parents. Birthday celebrations are now a necessity in everyone's life, so the tendency to enjoy shocking moments has become very close to every person's heart. Everyone wants to celebrate their birthday happily to create beautiful and happy memories for a lifetime. People who live busy lives in big cities are often engaged in finding happy ways, and celebration is the perfect place for pleasure. Bamboo Events Planning and Decor is one of the top birthday event planners in Coimbatore and Pondicherry, organizing such a great birthday themed party.</p>
</div>
            <button className="book-event" onClick={handleGetCallBack}>Book Event</button>
        </div>   <Footer /> </div>
    );
};

export default EventDisplay;
