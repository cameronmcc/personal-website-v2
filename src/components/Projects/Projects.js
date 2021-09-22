import React from "react";
import "./style.css";
import proj1 from "../../images/proj1.png";

const Projects = () => {
  return (
    <>
      <div className='project-gradient-container-top'> </div>
      <div className='projects-container-column'>
        <div className='proj-heading'>Projects</div>

        <section className='proj-items-container-row'>
          <div className='proj-1'>
            <div className='proj-title'>Personal Website</div>
            <div className='proj-img-wrapper'>
              <img className='proj-img' src='proj1.png' alt='proj1.png'></img>
            </div>
            <div className='proj-text-wrapper'>
              <h2>
                A personal website using React. Fully dynamic using Hooks,
                useState, Smooth-scrooll, and modals.
              </h2>
            </div>
            <div className='btn-wrapper'>
              <button className='prj-btn'>Code</button>
              <button className='prj-btn'>Live Site</button>
            </div>
          </div>
          <div className='proj-2'>
            <div className='proj-title'>Personal Website</div>
            <div className='proj-img-wrapper'>
              <img className='proj-img' src='proj1.png' alt='proj1.png'></img>
            </div>
            <div className='proj-text-wrapper'>
              <h2>
                A personal website using React. Fully dynamic using Hooks,
                useState, Smooth-scrooll, and modals.
              </h2>
            </div>
            <div className='btn-wrapper'>
              <button className='prj-btn'>Code</button>
              <button className='prj-btn'>Live Site</button>
            </div>
          </div>
          <div className='proj-3'>
            <div className='proj-title'>Personal Website</div>
            <div className='proj-img-wrapper'>
              <img className='proj-img' src='proj1.png' alt='proj1.png'></img>
            </div>
            <div className='proj-text-wrapper'>
              <h2>
                A personal website using React. Fully dynamic using Hooks,
                useState, Smooth-scrooll, and modals.
              </h2>
            </div>
            <div className='btn-wrapper'>
              <button className='prj-btn'>Code</button>
              <button className='prj-btn'>Live Site</button>
            </div>
          </div>
        </section>
      </div>
      <div className='project-gradient-container-bottom'></div>
    </>
  );
};

export default Projects;
