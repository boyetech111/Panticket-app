import React from 'react'
import './organizer-description.css';

function OrganizerDescription() {
  return (
      <div className='event-content-container organizer-container'>
      <div className='organizer-info'>
        <p className='info-title'>MUYIWA ADIGUN SHOW</p>
        <p className='info-description'>
          Muyiwa Adigun Show, the producer and promoter of "PELUMI," is a
          non-governmental organization with the goal of uniting families and
          entertaining wisdom. Through entertainment, we hope to proclaim and
          promote the practice of sound family values, as well as educate young
          people on the dynamics of a fulfilling and decent relationship,
          thereby building a peaceful and productive society and nation. We
          pursue this vision by organizing conferences, seminars, talk shows,
          online articles, and podcasts, as well as stage plays in places where
          young people congregate
        </p>
      </div>

      <div className='organizer-socials'>
        <List listTitle='Phone Number' listBody={'0802 134 5678'} />
        <List listTitle='Email' listBody={'hello@pelumi.com'} />
        <List listTitle='Twitter' listBody={'@pelumi'} />
        <List listTitle='Instagram' listBody={'@pelumi'} />
        <List listTitle='Facebook' listBody={'facebook.com/pelumi'} />
      </div>
    </div>
  )
}

export default OrganizerDescription;



function List({ listTitle, listBody}) {
    return (
        <div className='listContainer'>
            <p> {listTitle}</p>
            <p>{listBody}</p>
        </div>
    )
}