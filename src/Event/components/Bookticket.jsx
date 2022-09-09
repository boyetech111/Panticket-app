import React from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button';
import './bookticket.css'

function Bookticket() {
  return (
    <div className='booking-container'>
        <div className='container-header'>
           <p className='container-title'>Book Ticket</p>
           <button className='close-icon'>
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path d="M18 6L6 18" stroke="#666670" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             <path d="M6 6L18 18" stroke="#666670" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
           </button>
        </div>
        <div className='ticket-form-container'>
            <form className='ticket-form'>
                <div className='form-input'>
                    <Input label={'Name'} type='text' placeholder={'Enter Name'}/>
                </div>
                <div className='form-input'>
                    <Input label={'Email'} type='email' placeholder={'Enter email'}/>
                </div>
                <div className='form-input'>
                    <Input label={'Phone'} type='tel' placeholder={'Enter Phone number'}/>
                </div>
                <div className='form-button'>
                    <Button variation={'secondary'} title={'Make Payment'} />
                </div>
            </form>

            <div className='ticket-summary'>
                <div className='ticket-type-group'>
                    <p className='type-group'>
                        <span>Regular Ticket</span>
                        <span>(N10000)</span>
                    </p>
                    <p className='price-group'>
                        <span>Qty x 2</span>
                        <span>(N20000)</span>
                    </p>
                    <div className='ticket-price-group'>
                    <p className='type-group'>
                        <span>Sub-total</span>
                        <span>(N2,000)</span>
                    </p>
                    <p className='price-group'>
                        <span>VAT7.5%</span>
                        <span>(N150)</span>
                    </p>
                    <p className='total-group'>
                        <span>Total</span>
                        <span>(N2,150)</span>
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bookticket;