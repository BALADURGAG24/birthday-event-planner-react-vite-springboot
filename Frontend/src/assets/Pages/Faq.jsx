import React from 'react';
import FAQItem from '../Pages/F';
import '../Css/Faq.css';
import Footer from './Footer';
import Navbar from './Navbar';
const FAQ = () => {
  const faqData = [
    {
      question: '1.What is your company all about?',
      answer: 'We are a [brief description of your company], dedicated to [mention your company\'s mission or purpose]. We strive to [highlight your company\'s core values and goals].',
    },
    {
      question: '2.How can I contact your customer support team?',
      answer: 'You can reach our customer support team by [provide contact details, such as phone number, email address, or a link to the contact page]. We are here to assist you with any questions or concerns.].',
    },
    {
      question: '3. What products/services do you offer?',
      answer: 'We offer a wide range of products/services, including [list your main products or services]. You can explore our full catalog on our [link to your products/services page].].',
    },
    {
      question: '4. How do I place an order?',
      answer: 'To place an order, simply follow these steps:Browse our products/services catalog.Select the item(s) you wish to purchase.Add them to your cart.Proceed to checkout.Fill in your shipping and payment information.Review your order and confirm.].',
    },
    {
      question: '5. What payment methods do you accept?',
      answer: 'We accept several payment methods, including [list accepted payment methods, e.g., credit/debit cards, PayPal, etc.]. You can choose the one thats most convenient for you during the checkout process.',
    },
    {
      question: '6. What is your return/exchange policy?',
      answer: 'Our return/exchange policy allows you to return or exchange products within [mention the number of days] days of purchase if they are in their original condition. For more details, please visit our [link to your return/exchange policy page].',
    },
    {
      question: '7. How long does shipping take?',
      answer: 'Shipping times may vary depending on your location and the selected shipping method. Generally, it takes [mention average shipping time] for standard shipping. For more information, please refer to our [link to your shipping information page].',
    },
    {
      question: '8. Do you offer international shipping?',
      answer: 'Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary based on your location. Please visit our [link to your international shipping page] for more details.',
    },
    {
      question: '9. What security measures do you have in place for online transactions?',
      answer: 'We take online security seriously. All transactions on our website are encrypted using [mention encryption technology, e.g., SSL] to ensure the safety of your personal and financial information.',
    },
    {
      question: '10. How can I stay updated on your latest products and promotions?',
      answer: '*To stay in the loop about our latest products, promotions, and news, you can subscribe to our newsletter. You can find the subscription option on our homepage or [link to your newsletter signup page]. Additionally, you can follow us on [list social media platforms] for real-time updates.',
    },
  ];
  return (
<div>  <Navbar /><div><br></br><br></br><br></br><br></br>
    <div className="faq-container">
    <div> 
      <h1>Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>   </div><br></br>
    <Footer />
    </div></div>
  );
}
export default FAQ;