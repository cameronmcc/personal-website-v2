import React, { useState, useEffect } from 'react';
import './style.css';
import { data } from '../Projects/data';
// import { Link as LinkR } from 'react-router-dom';

const Cards = () => {
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
  console.log(`${data.btn2}`);
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
                  <a className='card__link' href={props.link1}>
                    <button className='card__btn'>Code</button>
                  </a>

                  <a className='card__link' href={props.link2}>
                    <button className='card__btn'>Live Site</button>
                  </a>
                </div>
              </>
            ) : (
              <>
                <img src={props.img} alt='alt' className='card__img' />
                <div className='card__body'>
                  <h2 className='card__title'>{props.title}</h2>
                  <p className='card__description'>{props.desc}</p>
                  <div className='card-btn-wrapper'>
                    <a className='card__link' href={props.link1}>
                      <button className='card__btn'>Code</button>
                    </a>
                    <a className='card__link' href={props.link2}>
                      <button className='card__btn'>Live Site</button>
                    </a>
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
