import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import './homepage.css';
import Card from '../components/Card';
import BigCard from '../components/BigCard';

function Homepage() {
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
        <div className='event-container'>
            <p className='section-title'>Events near you</p>
            <div className='events'>
                <Card
                  name='The Concert'
                  image={'/image/image1.png'}
                  location='Lagos'
                  price='N2000'
                  date='10/10/2022'
                />
                <Card
                  name='The Concert'
                  image={'/image/image2.png'}
                  location='Lagos'
                  price='N2000'
                  date='10/10/2022'
                />
                <Card
                  name='The Concert'
                  image={'/image/image3.png'}
                  location='Lagos'
                  price='N2000'
                  date='10/10/2022'
                />
                <Card
                  name='The Concert'
                  image={'/image/image4.png'}
                  location='Lagos'
                  price='N2000'
                  date='10/10/2022'
                />
                <Card
                  name='The Concert'
                  image={'/image/image5.png'}
                  location='Lagos'
                  price='N2000'
                  date='10/10/2022'
                />
                <Card
                  name='The Concert'
                  image={'/image/image6.png'}
                  location='Lagos'
                  price='N2000'
                  date='10/10/2022'
                />
                <Card
                  name='The Concert'
                  image={'/image/image7.png'}
                  location='Lagos'
                  price='N2000'
                  date='10/10/2022'
                />
                <Card
                  name='The Concert'
                  image={'/image/image8.png'}
                  location='Lagos'
                  price='N2000'
                  date='10/10/2022'
                />
                <Card
                  name='The Concert'
                  image={'/image/image9.png'}
                  location='Lagos'
                  price='N2000'
                  date='10/10/2022'
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
     
    </>
  )
}

export default Homepage;