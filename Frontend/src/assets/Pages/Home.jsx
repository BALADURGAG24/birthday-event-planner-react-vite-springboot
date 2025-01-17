  import React from 'react';
  import '../Css/Home.css';
  import Footer from './Footer';
  import Navbar from './Navbar';
  import { Link } from 'react-router-dom';

  function Home() {
    return (
      <div>
        <Navbar /><br></br><br></br>
        <div className="hero">
          <h1>Welcome to CelebRave!</h1>
          <p className='jj'>Explore our event management services and make your celebration truly memorable.</p>
          <Link to="/eventform" className="cta-button">Book Your Event</Link>
        </div>
          <h2 className='homeheading1'>Our Services</h2>
        <div className="services">
          <div className="service">
            <img src="https://www.bambooevents.co.in/images/new/birthday2.webp" alt="Service 1" />
            <h3 className='homeheading'>Birthday</h3>
            <p className='homeheading'>Birthday party Events</p>
          </div>
          <div className="service">
            <img src="https://www.bambooevents.co.in/images/new/product-launch-event.png" alt="Service 2" />
            <h3 className='homeheading'>Corporate</h3>
            <p className='homeheading'>Corporate Events</p>
          </div>
          <div className="service">
            <img src="https://www.bambooevents.co.in/images/new/corporate2.webp" alt="Service 3" />
            <h3 className='homeheading'>Party</h3>
            <p className='homeheading'>Party Celebration</p>
          </div>
        </div>
        <div className="testimonials-section">
        <h2 className='js'>Testimonials</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"Our daughter's birthday party was a huge success, thanks to the amazing team at Your Birthday Celebration Hub!"</p>
            <span>- John Doe</span>
          </div>
          <div className="testimonial">
            <p>"We were thrilled with the creativity and attention to detail that went into planning our son's birthday party. It was truly memorable!"</p>
            <span>- Jane Smith</span>
          </div>
        </div>
      </div>
        <Footer />
      </div>
    );
  }

  export default Home;
