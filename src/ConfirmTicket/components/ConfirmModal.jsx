import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './confirm-modal.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

function ConfirmModal({ setModal }) {
	function handleSubmit(event) {
		event.preventDefault();
	}
	return (
		<>
			<div className='confirm-ticket-container'>
				<div className='container-header'>
					<p className='container-title'>Confirm Ticket</p>
					<button
						onClick={() => setModal((prevState) => !prevState)}
						className='close-icon'>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M18 6L6 18'
								stroke='#666670'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M6 6L18 18'
								stroke='#666670'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</button>
				</div>
				<div className='ticket-form-container'>
					<form onSubmit={handleSubmit} className='confirm-ticket-form'>
						<div className='form-input'>
							<Input
								label={'Ticket Number'}
								type='email'
								placeholder={'Enter Ticket Number'}
							/>
						</div>
						<div className='recaptcha-container' style={{ width: '300px' }}>
						<ReCAPTCHA sitekey='6LeWGAMiAAAAAHG3VTKub6_CF4OUncFzTWNJ1XlO'/>
						</div>
							
						<div className='form-button'>
							<Button variation={'secondary'} title='Verify Ticket' />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default ConfirmModal;