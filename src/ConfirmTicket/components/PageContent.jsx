import React from 'react';
import './Pagecontent.css';
import ReactToPdf from 'react-to-pdf';
import Button from '../../components/Button';
import PurchaseSummary from './PurchaseSummary';
import EventInfo from './../../Event/components/EventInfo';
import OrganizerDescription from '../../components/OrganizerDescription';
import TicketDetails from './TicketDetails';
// import ConfirmModal from './ConfirmModal';

function PageContent() {
  const ref = React.createRef();
  const btnref = React.createRef();

  function handlePDFComplete(){
    ref.current.style.width = '100%';
    btnref.current.style.display = 'flex';
  }

  

  return (
    <div ref={ref} className='page-content-container'>
        <TicketDetails/>
        <PurchaseSummary titleState={false}/>
        <div ref={btnref} className='ticket-action-btn'>
        <ReactToPdf targetRef={ref} onComplete={handlePDFComplete}>
					{({ toPdf }) => (
						<div>
							<Button
								onclick={() =>{
                  console.log(ref)
                  ref.current.style.width = '800px';
                  btnref.current.style.display  = 'none';
                  toPdf();
                }}
								variation={'secondary'}
								title='Download ticket'
							/>
						</div>
					)}
				</ReactToPdf>
           <div>
             <Button variation={'primary'} title='Share Ticket'/>
           </div>
        </div>
        <EventInfo
				  eventDescription={`The play, "Pelumi," is a musical love story that revolves around Pelumi, a woman who was in a relationship with Adigun, a man with direction and purpose, but felt pressured by her mother to find love with someone else because of her mother's wealth and availability. You won’t want to miss this show on this year valentine.`}
			  />
			 <OrganizerDescription />
    </div>
  )
}

export default PageContent;