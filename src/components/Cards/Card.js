import React from 'react';
import './style.css';
import { data } from '../../data/data';

const Cards = (props) => {
  return (
    <div className='wrapper'>
      {data.map((data) => {
        return (
          <div className='card'>
            <img src={props.img} className='card__img' />
            <div className='card__body'>
              <h2 className='card__title'>{props.title}</h2>
              <p className='card__description'>{props.desc}</p>
              <button className='card__btn'>{props.btn1}</button>
              <button className='card__btn'>{props.btn2}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
