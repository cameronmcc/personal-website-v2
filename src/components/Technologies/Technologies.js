import React from 'react';
import { DiReact, DiFirebase, DiAptana } from 'react-icons/di';
import { Link as LinkS } from 'react-scroll';
import './style.css';

const Technologies = () => {
  return (
    <>
      <div id='technologies' className='technologies-container'>
        <div className='content-wrapper'>
          <div className='tech-heading section-heading'>Technologies</div>
          <section className='tech-items-container'>
            <div className='tech-items tech-item-1'>
              <div className='tech-item-row'>
                <DiReact size='8rem' className='tech-icons' />
                <div className='tech-text-wrapper'>
                  <div className='tech-items-heading'>Front-End</div>
                  <h3>React, Vue</h3>
                  <h3>CSS, Styled Components</h3>
                  <h3>HTML</h3>
                  <h3>Material UI</h3>
                </div>
              </div>
            </div>
            <div className='tech-items tech-item-2'>
              <div className='tech-item-row'>
                <DiAptana size='8rem' className='tech-icons' />
                <div className='tech-text-wrapper'>
                  <div className='tech-items-heading'>Back-End</div>
                  <h3>Javascript</h3>
                  <h3>Python</h3>
                  <h3>Node</h3>
                  <h3>PHP</h3>
                </div>
              </div>
            </div>
            <div className='tech-items tech-item-3'>
              <div className='tech-item-row'>
                <DiFirebase size='8rem' className='tech-icons' />
                <div className='tech-text-wrapper'>
                  <div className='tech-items-heading'>Databases</div>
                  <h3>MongoDB</h3>
                  <h3>MySQL/NOSQL</h3>
                  <h3>Eloquent ORM</h3>
                  <h3>Django ORM</h3>
                </div>
              </div>
            </div>
          </section>
          <LinkS to='portfolio' className='tech-btn-container'>
            <button className='tech-btn'>Go to Portfolio</button>
          </LinkS>
        </div>
      </div>
    </>
  );
};

export default Technologies;
