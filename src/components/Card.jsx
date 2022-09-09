import React from 'react';
import './card.css';

function Card({image, location, price, date, name}) {
  return (
    <>
      <div className='card-container'>
            <img src={`${image}`} alt='event' />
            <div className='card-details'>
                <p className='name'>{name}</p>
                <p className='date'>{date}</p>
                <p className='location'>{location}</p>
                <p className='price'>{price}</p>
            </div>
      </div>
    </>
  )
}

export default Card;