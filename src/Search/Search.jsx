import React from 'react'
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import './search.css';
import Searchcard from '../components/Searchcard';
import BigCard from '../components/BigCard';
import Footer from '../components/Footer';

function Search() {
  return (
    <>
      <Navbar/>
      <header className='home-header'>
        <div className='header-text'>
            <p className='text-content'>Connect and get ticket to</p>
            <p className='text-content'>events near you based on your</p>
            <p className='text-content'>interest</p>  
        </div>
     </header>
     <section className='event-section'>
        <form className='search-form'>
            <div className='search-input'>
                <Input placeholder='Search Event' className='input-search'/>
            </div>
            <div className='categories-input'>
                <Input placeholder='Categories' className='input-cate'/>
            </div>
            <div className='form-btn'>
                <Button title='Confirm Ticket' variation={'secondary'} />
            </div>
        </form>
        <div className='event-organizer'>
          <p className='section-title'>Search Result</p>
          <div className='event-search'>
            <Searchcard
              image={'/image/image1.png'}
              title='Headies'
              date='10/10/2022'
              venue='USA'
              organizer='Sunday Aare'
              price='N2000'
              attendies='Vip'
            />
            <Searchcard
              image={'/image/image2.png'}
              title='Headies'
              date='10/10/2022'
              venue='USA'
              organizer='Sunday Aare'
              price='N2000'
              attendies='Vip'
            />
            <Searchcard
              image={'/image/image2.png'}
              title='Headies'
              date='10/10/2022'
              venue='USA'
              organizer='Sunday Aare'
              price='N2000'
              attendies='Vip'
            />
          </div>
        </div> 
        <div className='event-container'>
					<p className='section-title'>Featured Events</p>
					<div className='featured-section'>
						<BigCard
							name='The Concert'
							image={'/image/image10.png'}
							location='Lagos'
							price='N200000'
							discount='20% off'
						/>
						<BigCard
							name='The Concert'
							image={'/image/image11.png'}
							location='Lagos'
							price='N200000'
							discount='20% off'
						/>
					</div>
				</div> 
     </section>   
     <Footer/>
    </>
  )
}

export default Search;