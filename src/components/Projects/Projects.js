import React from 'react';
import Cards from '../Cards/Cards';
import './style.css';
const Projects = () => {
  return (
    <div className='proj-container'>
      <div className='.proj-heading-card'>
        <h1 className='proj-heading section-heading'>Projects</h1>
      </div>
      <div className='white-wrapper'>
        <Cards />
        <div className='contact-btn-container'>
          <button className='contact-btn'>
            <a href='#'></a>Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
