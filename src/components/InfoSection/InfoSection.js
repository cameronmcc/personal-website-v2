import './style.css';
import React from 'react';
import svg2 from '../../images/svg2.svg';
import { Link as LinkS } from 'react-scroll';
import About from '../About/About';

const InfoSection = () => {
  return (
    <container id='home' className='info-section-container'>
      <section className='info-sections info-section'>
        <div className='info-row'>
          <div className='info-column'>
            <div className='text-wrapper'>
              <div className='top-line'>
                Cameron McCloskey
                <div className='heading'>
                  Welcome to my Personal Portfolio
                  <div className='subtitle'>Full Stack Developr</div>
                  <LinkS to='portfolio' className='btn2Link'>
                    <button className='btn'>Projects</button>
                  </LinkS>
                </div>
              </div>
            </div>
          </div>
          <div className='info-column'>
            <div className='img-wrapper'>
              <img className='info-image' src={svg2} alt='alt'></img>
            </div>
          </div>
        </div>
      </section>
      <About />
    </container>
  );
};

export default InfoSection;
