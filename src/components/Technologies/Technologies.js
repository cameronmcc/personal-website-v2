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
          <div className='tech-heading'>Technologies</div>
          <section className='tech-items-container'>
            <div className='tech-item-1'>
              <DiReact size='5rem' classname='tech-icons' />
              <h1>Front-End</h1>
              <h3>React</h3>
              <h3>CSS</h3>
              <h3>HTML</h3>
            </div>
            <div className='tech-item-2'>
              <DiAptana size='5rem' classname='tech-icons' />
              <h1>Back-End</h1>
              <h3>Javascript</h3>
              <h3>Python</h3>
            </div>
            <div className='tech-item-3'>
              <DiFirebase size='5rem' classname='tech-icons' />
              <h1>Database Tech</h1>
              <h3>MongoDB</h3>
              <h3>SQL/NOSQL</h3>
              <h3>Django ORM</h3>
            </div>
          </section>
          <button className='tech-btn'>Go to Portfolio</button>
        </div>
      </div>
    </>
  );
};

export default Technologies;
