import "./style.css";
import React from "react";
import svg2 from "../../images/svg2.svg";
import svg3 from "../../images/svg3.svg";
import { Link as LinkS } from "react-scroll";

const InfoSection = () => {
  return (
    <container className='info-section'>
      <section className='info-section-container'>
        <div className='info-row'>
          <div className='info-column'>
            <div className='text-wrapper'>
              <div className='top-line'>
                Cameron McCloskey
                <div className='heading'>
                  Welcome to my Personal Portfolio
                  <div className='subtitle'>Full Stack Developr</div>
                  <a href='projects'>
                    <button className='btn'>Projects</button>
                  </a>
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
      <section className='info-section-container2'>
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
                    Hi there! I'm Cameron and I'm a full stack developer
                    specialized in making beautiful apps using React with the
                    MERN stack. I've also coded in Spring and Django. Feel free
                    to check out some of my work below.
                  </div>
                  <a href='projects'>
                    <button className='btn2'>Technologies</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </container>
  );
};

export default InfoSection;
