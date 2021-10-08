import React from "react";
import "./style.css";
import proj1 from "../../images/proj1.png";
import bg from "../../images/bg.svg";

const Projects = () => {
  return (
    <>
      <div className="proj-container">
        <div className="proj-white-bg">
          <h1 className="proj-heading">Projects</h1>
          <section className="proj-items-grid">
            <div className=" projects proj-1">
              <div className="project-items-row">
                <div className="proj-title">Personal Website</div>
                {/* <div className="proj-img-wrapper">
              <img className="proj-img" src="proj1.png" alt="proj1.png"></img>
            </div> */}
                <div className="proj-text-wrapper">
                  <h2>
                    A personal website using React. Fully dynamic using Hooks,
                    useState, Smooth-scrooll, and modals.
                  </h2>
                </div>
                <div className="btn-wrapper">
                  <button className="prj-btn">
                    <a href="https://github.com/cameronmcc/personal-website-v2"></a>
                    Code
                  </button>
                  <button className="prj-btn">
                    <a href="cameronmccloskey.com"></a>Live Site
                  </button>
                </div>
              </div>
            </div>
            <div className="projectss proj-2">
              <div className="proj-title">React Menu App</div>
              {/* <div className="proj-img-wrapper">
              <img className="proj-img" src="proj2.png" alt="proj1.png"></img>
            </div> */}
              <div className="proj-text-wrapper">
                <h2>
                  A React menu app that maps through data and dynamically
                  generates Category tabs for quick updates.
                </h2>
              </div>
              <div className="btn-wrapper">
                <button className="prj-btn">
                  <a href="https://github.com/cameronmcc/menuProject"></a>
                  Code
                </button>
                <button className="prj-btn">
                  <a href="https://mccloskeymenuproject.netlify.app/"></a>Live
                  Site
                </button>
              </div>
            </div>
            <div className="proj-3">
              <div className="proj-title">Auto Slider</div>
              {/* <div className="proj-img-wrapper">
              <img className="proj-img" src="proj3.png" alt="proj1.png"></img>
            </div> */}
              <div className="proj-text-wrapper">
                <h2>
                  A simple review app that maps through user data and
                  autoscrolls between users if the next buttons aren't pressed.
                </h2>
              </div>
              <div className="btn-wrapper">
                <button className="prj-btn">
                  <a href="https://github.com/cameronmcc/slider"></a>
                  Code
                </button>
                <button className="prj-btn">
                  <a href="https://mccloskeymenuproject.netlify.app/"></a>Live
                  Site
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
