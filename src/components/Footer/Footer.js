import React from 'react';
import './style.css';
import ContactForm from '../Contact/Contact';

const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='grid-wrapper'>
          <h2 className='section-title'>Contact</h2>
          <div classNa me='footer-contact'>
            <div className='footer-heading-1'>
              Thanks for visiting! Feel free to reach out and connect.
            </div>
            <div className='footer-subtext'>Drop a message:</div>
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Footer;
