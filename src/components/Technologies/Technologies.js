import React from "react";
import { DiReact, DiFirebase, DiAptana } from "react-icons/di";
import { IoLogoNodejs, IoLogoCss3, IoLogoHtml5 } from "react-icons/io"
import { IconContext } from "react-icons/lib";
import "./style.css";

const Technologies = () => {
  return (
    <>
      <div className='technologies-container'>
          <div className='tech-heading'>Technologies</div>
          <section className='tech-items-container'>
            <div className='tech-items tech-item-1'>
              <div className='tech-item-row'>
                <DiReact size='6rem' className='tech-icons' />
                  <div className='tech-text-wrapper'>
                    <div className='tech-items-heading'>Front-End</div>
                    <h3>React</h3>
                    <h3>CSS</h3>
                    <h3>HTML</h3>
                  </div>
              </div>
              <div className='tech-side-icons'>
              <IoLogoNodejs size='8rem' className='tech-icons' />
              <IoLogoCss3 size='8rem' className='tech-icons' />
              <IoLogoHtml5 size='8rem' className='tech-icons' />
              </div>
            </div>

            <div className='tech-items tech-item-2'>
              <div className='tech-item-row'>
                <DiAptana size='6rem' className='tech-icons' />
              </div>
              <div className='tech-item-row2'>
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
          <div className='empty-grid empty-grid-item-1'></div>
          <div className='empty-grid empty-grid-item-2'></div><div className='tech-btn-container'>
          <button className='tech-btn'>Go to Portfolio</button></div>
          </section>

        </div>
        <div className='gradient-container-bottom'></div>
    </>
  );
};

export default Technologies;
