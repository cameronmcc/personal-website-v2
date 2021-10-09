import React from 'react';
import Cards from '../Cards/Cards';
import './style.css';
const Projects = () => {
  return (
    <div className='proj-container'>
      <div className='wrapper'>
        <h1 className='proj-heading'>Projects</h1>
        <Cards />
      </div>
    </div>
  );
};

export default Projects;
