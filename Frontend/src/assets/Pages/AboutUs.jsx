import React, { useState } from 'react';
import '../Css/AboutUs.css';
import '../Css/Stats.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Services from './Services';
const AboutUs = () => {
  const [activeSection, setActiveSection] = useState(null);

  const sections = [
    {
      title: 'Who We Are',
      content: `Bamboo Events Planning and Decor is one of the top event management companies, focuses on event management in Coimbatore in a way that creates a win-win situation for all involved stakeholders. Our goal is to ensure that the clients, as well as participants of the event, have an overall positive experience. To do this, we don’t look at building one-time associations with clients; instead, we aim at creating long-lasting collaborations that will span years to come. Our core purpose is to flourish the WOW customer experience and to bring prosperity to the entire ecosystem connected with her.`,
      image: 'https://www.bambooevents.co.in/images/about1.webp',
    },
    {
      title: 'Our Mission',
      content: `The Bamboo Events Planning and Decor is an exponentially evolving full-service Event Management and Party Planners in Coimbatore, which will render best-in-class services for planning, building, and implementing parties and events of all natures to prove ourselves as the foremost brand in event planning and execution. Among the many event management companies in Coimbatore, it isn't easy to stand out. But with Bamboo Events Planning and Decor, the best Event Planner in Coimbatore, you can be assured of promises being met and on-time delivery of all services. BAMBOO EVENTS is excited to provide ‘Uniquely Elegant and Impressive Customizations' for the whole of your events.`,
      image: 'https://www.bambooevents.co.in/images/about2.webp',
    },
    {
      title: 'Our Vision',
      content: `We understand that a perfectly accomplished event can be leveraged to support a client's strategic vision, incorporated into a marketing plan, or used to build networks and client loyalty. Bamboo Events Planning and Decor approach every design with careful attention to detail and precision. Despite size and scope, we approach your event as a profession with distinct strategic aims, fixed milestones, and an overall plan to ensure that your event is delivered on time and budget.`,
      image: 'https://www.bambooevents.co.in/images/about3.webp',
    },
    {
      title: 'Promises a Feast of Event',
      content: `When it comes to planning your party, for Bamboo Events Planning and Decor, it always starts with diverse yet like-minded businesses with the primary objective of ‘Delivering Unrivalled Service’ and ‘Exceeding Expectations’ is our satisfaction. Bamboo Events Planning and Decor like to do things differently as we push the boundaries in event planning and deliver creativity to match each client's brand values and integrity. One thing is for sure; our passion for service and party planning sits at the heart of everything you do!`,
      image: 'https://www.bambooevents.co.in/images/about4.webp',
    },
  ];

  const handleClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };
  return (
      <div>
     <Navbar /><br></br><br></br>
    <div className="about-us-container">
    <div className='abouthe'><h1>About Us</h1></div>
      {sections.map((section, index) => (
        <div className="section-container" key={index}>
          <div className="section" key={index}>
            <h3 className="section-heading" onClick={() => handleClick(index)}>{section.title}</h3>
            {activeSection === index && (
              <>
                <img
                  src={section.image}
                  alt={section.title}
                  className="section-image"
                  style={{ width: '600px', height: '300px', objectFit: 'cover' }}
                />
                <p className={`section-content ${activeSection === index ? 'active' : ''}`}>{section.content}</p>
              </>
            )}
          </div>
        </div>
        
      ))}
        </div>
        <br></br>
        <div className="stats-container">
      <div className="stat">
        <div className="stat-value">12</div>
        <div className="stat-label">EXPERIENCE</div>
      </div>
      <div className="stat">
        <div className="stat-value">240</div>
        <div className="stat-label">WEDDING EVENT</div>
      </div>
      <div className="stat">
        <div className="stat-value">187</div>
        <div className="stat-label">CORPORATE EVENT</div>
      </div>
      <div className="stat">
        <div className="stat-value">1255</div>
        <div className="stat-label">HAPPY CLIENTS</div>
        <br></br>
      </div>
    </div>  <br></br> <br></br> <br></br><Services/><br></br><br></br><br></br>
      <Footer />
    </div>
  );
};

export default AboutUs;
