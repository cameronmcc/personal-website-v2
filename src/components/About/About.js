import React from 'react';
import './style.css';
import svg3 from '../../images/svg3.svg';
import { Link as LinkS } from 'react-scroll';

const About = () => {
  return (
    <section id='about' className='info-sections info-section-2'>
      <div className='info-row'>
        <div className='info-column'>
          <div className='img-wrapper'>
            <img className='info-image' src={svg3} alt='alt'></img>
          </div>
        </div>
        <div className='info-column'>
          <div className='text-wrapper'>
            <div className='top-line'>
              <div className='heading'>
                About Me
                <div className='subtitle'>
                  Hi I'm Cameron and I'm a full stack developer specialized in
                  making React apps using the MERN Framework. I've also coded in
                  Spring and Django. Feel free to check out some of my work
                  below.
                </div>
                <LinkS to='technologies'>
                  <button className='btn2'>Technologies</button>
                </LinkS>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
