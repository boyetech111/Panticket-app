import './content.css';
import React from 'react';
import TicketCategory from './TicketCategory';
import Bookticket from './Bookticket';
import EventInfo from './EventInfo';
import OrganizerDescription from '../../components/OrganizerDescription'

function Content({setModal}) {
  return (
    <section className='main-container'>
        <EventInfo
          eventDescription={`The play, "Pelumi," is a musical love story that revolves around
              Pelumi, a woman who was in a relationship with Adigun, a man with
              direction and purpose, but felt pressured by her mother to find love
              with someone else because of her mother's wealth and availability.
              You won’t want to miss this show on this year valentine.`}
          dateTime={'14th February, 2022'}
          eventVenue='Oduduwa Hall, Obafemi Awolowo University, Ile-Ife, Osun State'
        />
        <div className='ticket-container'>
            <p className='ticket-title'>Get your Ticket</p>
            <div className='ticket-category'>
                <TicketCategory
                 name='Regular Ticket'
                 price={'N10,000'}
                 availableTicket='10'
                 color={"regular"}
                 setModal={setModal}
                />
                <TicketCategory
                 name='Vip Ticket'
                 price={'N10,000'}
                 availableTicket='10'
                 color={"vip"}
                 setModal={setModal}
                />
                <TicketCategory
                 name='Premium Ticket'
                 price={'N10,000'}
                 availableTicket='10'
                 color={"premium"}
                 setModal={setModal}
                />  
                <TicketCategory
                 name='Royalty Ticket'
                 price={'N10,000'}
                 availableTicket='10'
                 color={"royalty"}
                 setModal={setModal}
                />
            </div>
        </div>
       <OrganizerDescription/>
    </section>
  )
}

export default Content