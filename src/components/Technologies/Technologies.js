import React from "react";
import { DiReact, DiFirebase, DiAptana } from "react-icons/di";
import { IconContext } from "react-icons/lib";
import "./style.css";

const Technologies = () => {
  return (
    <>
      <div className='gradient-container-top'></div>
      <div className='technologies-container'>
        <div className='info-white-bg'>
          <div className='tech-heading-container'>
          <div className='tech-heading-container2'>
          <div className='tech-heading'>Technologies</div>
          </div>
          </div>
          <section className='tech-items-container'>
            <div className='tech-item-1'>
              <div className='tech-item-row'>
                <DiReact size='6rem' className='tech-icons' />
              </div>
              <div className='tech-item-row2'>
                <div className='tech-text-wrapper'>
                  <div className='tech-items-heading'>Front-End</div>
                  <h3>React</h3>
                  <h3>CSS</h3>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className='tech-item-2'>
              <div className='tech-item-row'>
                <DiAptana size='6rem' className='tech-icons' />
              </div>
              <div className='tech-item-row2'>
                <div className='tech-text-wrapper'>
                  <div className='tech-items-heading'>Back-End</div>
                  <h3>Javascript</h3>
                  <h3>Python</h3>
                </div>
              </div>
            </div>
            <div className='tech-item-3'>
              <div className='tech-item-row'>
                <DiFirebase size='6rem' className='tech-icons' />
              </div>
              <div className='tech-item-row2'>
                <div className='tech-text-wrapper'>
                  <div className='tech-items-heading'>Databases</div>
                  <h3>MongoDB</h3>
                  <h3>SQL/NOSQL</h3>
                  <h3>Django ORM</h3>
                </div>
              </div>
            </div>
          </section>
          <button className='tech-btn'>Go to Portfolio</button>
        </div>
      </div>
    </>
  );
};

export default Technologies;
