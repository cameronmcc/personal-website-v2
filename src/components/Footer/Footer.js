import React from 'react';
import './style.css';
import ContactForm from '../Contact/Contact';
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import { Link as LinkR } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <IconContext.Provider value={{ size: '7rem', color: '#252e4d' }}>
        <div id='footer' className='footer-container'>
          <h2 className='section-title section-heading'>Contact</h2>
          <div className='footer-heading-1'>
            Thanks for visiting! Feel free to reach out and connect.
          </div>
          <div className='grid-wrapper'>
            <div className='socials-wrapper'>
              <div className='footer-subtext'>Socials:</div>
              <div className='socials-grid'>
                <a href='https://www.github.com/cameronmcc'>
                  <AiFillGithub className='social-icons' />
                </a>
                <a href='https://www.linkedin.com/in/cameronmccloskey/'>
                  <AiFillLinkedin className='social-icons' />
                </a>
                <a href='https://www.instagram.com/cameronmcc/'>
                  <AiFillInstagram className='social-icons' />
                </a>
                <a href='https://leetcode.com/cameronmcc/'>
                  <SiLeetcode className='social-icons' />
                </a>
              </div>
            </div>
            <div className='form-container'>
              <div className='footer-subtext'>Drop a message:</div>
              <ContactForm />
            </div>
          </div>
          <div className='bottom-content'>
            <h4 className='bottom-text'>
              This website was designed and coded by Cameron McCloskey. (c) 2021
            </h4>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Footer;
