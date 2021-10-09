import React from 'react';
import {
  DiReact,
  DiFirebase,
  DiAptana,
  DiMongodb,
  DiMysql,
  DiDjango,
} from 'react-icons/di';
// import {
//   IoLogoNodejs,
//   IoLogoCss3,
//   IoLogoHtml5,
//   IoLogoPython,
//   IoLogoJavascript,
// } from "react-icons/io";

import { IconContext } from 'react-icons/lib';
import './style.css';

const Technologies = () => {
  return (
    <>
      <div className='technologies-container'>
        <div className='content-wrapper'>
          <div className='tech-heading'>Technologies</div>
          <section className='tech-items-container'>
            <div className='tech-items tech-item-1'>
              <div className='tech-item-row'>
                <DiReact size='7rem' className='tech-icons' />
                <div className='tech-text-wrapper'>
                  <div className='tech-items-heading'>Front-End</div>
                  <h3>React</h3>
                  <h3>CSS</h3>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className='tech-items tech-item-2'>
              <div className='tech-item-row'>
                <DiAptana size='7rem' className='tech-icons' />
                <div className='tech-text-wrapper'>
                  <div className='tech-items-heading'>Back-End</div>
                  <h3>Javascript</h3>
                  <h3>Python</h3>
                  <h3>Node.js</h3>
                </div>
              </div>
            </div>
            <div className='tech-items tech-item-3'>
              <div className='tech-item-row'>
                <DiFirebase size='7rem' className='tech-icons' />
                <div className='tech-text-wrapper'>
                  <div className='tech-items-heading'>Databases</div>
                  <h3>MongoDB</h3>
                  <h3>SQL/NOSQL</h3>
                  <h3>Django ORM</h3>
                </div>
              </div>
            </div>
          </section>
          <div className='tech-btn-container'>
            <button className='tech-btn'>Go to Portfolio</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;
