import React from 'react';
import '../Css/WhatWeDo.css';
import Navbar from './Navbar';
import Footer from './Footer';

const WhatWeDoPage = () => {
  return (
    <div>
    <Navbar/>
    <br></br>    <br></br>    <br></br>
    <div className="what-we-do-page">
      <div className="content">
        <h1>What We Do</h1>
        <p>
          At Bamboo Events, we specialize in creating memorable and personalized birthday celebrations. Our services include:
        </p>
        <ul>
          <li><strong>Event Planning:</strong> We handle all aspects of event planning, from concept development to execution, ensuring a seamless and stress-free experience for you.</li>
          <li><strong>Venue Selection:</strong> We help you find the perfect venue for your birthday celebration, whether it's a private residence, banquet hall, or outdoor location.</li>
          <li><strong>Decoration and Theme Design:</strong> We create stunning decorations and themes that reflect your style and personality, transforming your venue into a magical setting.</li>
          <li><strong>Entertainment Booking:</strong> We arrange entertainment options such as DJs, live bands, magicians, and more to keep your guests entertained throughout the event.</li>
          <li><strong>Catering Services:</strong> We work with top catering companies to provide delicious food and beverages that will delight your guests.</li>
          <li><strong>Photography and Videography:</strong> We capture every special moment of your birthday celebration with professional photography and videography services.</li>
        </ul>
      </div>
        </div>
      <Footer/>
    </div>
  );
};

export default WhatWeDoPage;
