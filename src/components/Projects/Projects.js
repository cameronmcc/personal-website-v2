import React from 'react';
import Cards from '../Cards/Cards';
import './style.css';
const Projects = () => {
  return (
    <div className='proj-container'>
      <div className='white-wrapper'>
        <div className='.proj-heading-card'>
          <h1 className='proj-heading'>Projects</h1>
        </div>
        <Cards />
        <button className='contact-btn'>
          <a href='#'></a>Contact
        </button>
      </div>
    </div>
  );
};

export default Projects;
