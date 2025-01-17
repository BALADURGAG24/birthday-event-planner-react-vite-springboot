import React from 'react';
import '../Css/WhyUs.css';
import Navbar from './Navbar';
import Footer from './Footer';
const WhyUsPage = () => {
  return (
    <div>
    <Navbar/>
    <br></br><br></br><br></br><br></br>
    <div className="why-us-page">
      <div className="content">
        <h1>Why Choose Bamboo Events?</h1>
        <p>
          Bamboo Events is your premier choice for creating unforgettable birthday experiences. Here's why you should choose us:
        </p>
        <ul>
          <li>
            <strong>Experienced Team:</strong> Our team of dedicated event planners has over 10 years of experience in planning and executing birthday events, ensuring a seamless and enjoyable experience for you.
          </li>
          <li>
            <strong>Customized Packages:</strong> We offer a range of customized event packages tailored to your specific needs and preferences, ensuring that your birthday celebration is unique and memorable. From intimate gatherings to extravagant parties, we have you covered.
          </li>
          <li>
            <strong>Attention to Detail:</strong> We pay meticulous attention to every detail, from venue selection to decor and entertainment, to create a personalized and magical birthday celebration that reflects your style and personality.
          </li>
          <li>
            <strong>Exceptional Customer Service:</strong> Our dedicated team is committed to providing exceptional customer service, ensuring that your needs are met and your expectations exceeded. We are always available to answer your questions and address any concerns you may have.
          </li>
          <li>
            <strong>Reliable and Professional:</strong> You can rely on us to be professional and reliable, delivering on our promises and making your birthday celebration stress-free and enjoyable. We work tirelessly behind the scenes to ensure that everything runs smoothly on your special day.
          </li>
        </ul>
      </div>
    </div><Footer/></div>
  );
};

export default WhyUsPage;