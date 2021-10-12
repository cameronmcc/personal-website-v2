import React from 'react';
import Cards from '../Cards/Cards';
import { Link as LinkS } from 'react-scroll';
import './style.css';
const Projects = () => {
  return (
    <div id='portfolio' className='proj-container'>
      <div className='.proj-heading-card'>
        <h1 className='proj-heading section-heading'>Projects</h1>
      </div>
      <div className='white-wrapper'>
        <Cards />
        <div className='contact-btn-container'>
          <LinkS className='contact-link' to='footer'>
            <button className='contact-btn'>Contact </button>
          </LinkS>
        </div>
      </div>
    </div>
  );
};

export default Projects;
