import React, { useState, useEffect } from 'react';
import './style.css';
import { data } from '../Projects/data';

const Cards = ({ ...props }) => {
  return (
    <div className='grid-wrapper'>
      {data.map((props) => {
        return (
          <div className={`card ${props.accentClass}`}>
            <div className='card__body'>
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
