import React from 'react'
import './searchcard.css'
function Searchcard({image, title, date, venue, attendies, organizer, price}) {
  return (
    <>
      <div className='card-container'>
        <img src={`${image}`} alt='event'/>
        <div className='card-details'>
            <div className='card-title'>
            <p className='title'>{title}</p>
            <p className='price'>{price}</p> 
            </div>
            <p className='date'>{date}</p>
            <p className='venue'>{venue}</p>
            <div className='card-title'>
            <p className='attendies'>{attendies}</p>
            <p className='organizer'>{organizer}</p>
            </div>
        </div>

      </div>
    </>
  )
}

export default Searchcard;