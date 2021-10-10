import React, { useState, useEffect } from 'react';
import './style.css';
import { data } from '../Projects/data';

const Cards = ({ props }) => {
  // State value for mobile view
  const [mobileView, setMobileView] = useState(false);

  const changeMobileView = () => {
    if (window.innerWidth <= 1030) {
      setMobileView(true);
    } else {
      setMobileView(false);
    }
  };

  useEffect(() => {
    setMobileView();
  }, []);

  window.addEventListener('resize', changeMobileView);

  console.log(window.innerWidth);
  return (
    <div className='wrapper'>
      {data.map((props) => {
        return (
          <div className={`card ${props.accentClass}`}>
            {/* Conditionally rendering the JSX using our state to render divs in the correct order for the styling to work properly. On mobile screens, the IMG needs to be rendered first. On Desktop, the title (h2) needs to be rendered first. */}
            {!mobileView ? (
              <>
                <h2 className='card__title'>{props.title}</h2>
                <img src={props.img} alt='alt' className='card__img' />
                <p className='card__description'>{props.desc}</p>
                <div className='card-btn-wrapper'>
                  <button className='card__btn'>
                    <a href={props.btn1}></a>Code
                  </button>
                  <button className='card__btn'>
                    <a href={props.btn2}></a>Live Site
                  </button>
                </div>
              </>
            ) : (
              <>
                <img src={props.img} alt='alt' className='card__img' />
                <div className='card__body'>
                  <h2 className='card__title'>{props.title}</h2>
                  <p className='card__description'>{props.desc}</p>
                  <div className='card-btn-wrapper'>
                    <button className='card__btn'>
                      <a href={props.btn1}></a>Code
                    </button>
                    <button className='card__btn'>
                      <a href={props.btn2}></a>Live Site
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
