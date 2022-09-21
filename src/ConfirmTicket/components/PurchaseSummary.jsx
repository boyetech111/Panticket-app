import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import './Purchase-summary.css';

function PurchaseSummary({titleState}) {
    const [names, setName] = useState([]);
	useEffect(() => {
		async function getNames(){
		const {data} = await axios.get(
		'https://panticket-server.herokuapp.com/event'
		);
		setName(data.events)
		}
		getNames();
	},[]);	

	return (
		<div className='summary-container'>
		{titleState ? (
				<p className='summary-header'>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7 10L9 12L13 8M19 10C19 11.1819 18.7672 12.3522 18.3149 13.4442C17.8626 14.5361 17.1997 15.5282 16.364 16.364C15.5282 17.1997 14.5361 17.8626 13.4442 18.3149C12.3522 18.7672 11.1819 19 10 19C8.8181 19 7.64778 18.7672 6.55585 18.3149C5.46392 17.8626 4.47177 17.1997 3.63604 16.364C2.80031 15.5282 2.13738 14.5361 1.68508 13.4442C1.23279 12.3522 1 11.1819 1 10C1 7.61305 1.94821 5.32387 3.63604 3.63604C5.32387 1.94821 7.61305 1 10 1C12.3869 1 14.6761 1.94821 16.364 3.63604C18.0518 5.32387 19 7.61305 19 10Z" stroke="#24B561" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
					<span>Thanks for your purchase</span>
				</p>
        ) : null}
			<div className='summary-content'>
				<div className='summary-content-title'>
					<p>You are set for</p>
					<p>
						{/* {names.map((oneEvent) => {
							return (
								<span>Pelumi</span> {oneEvent.name}
							)
						})}
						 */}
					</p>
				</div>
				<div className='summary-content-body'>
					<p>Your VIP ticket number is #12345687</p>
					<p className='ticket-email-container'>
						1 Ticket has been sent to {'dotun@example.com'}. Please use this
						number to get a physical pass at the event.
					</p>
					<p>N.B: One ticket is valid for just one person</p>
				</div>

				<div className='summary-content-time'>
					<div>
						<p>Date & Time</p>
						<p>
							<span>On 14th February, 2022</span> <span>5PM WAT</span>
						</p>
					</div>
					<div>
						<p>Venue</p>
						<p>Oduduwa Hall, OAU, Ile-Ife, Osun State</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PurchaseSummary;
