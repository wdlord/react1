import React from 'react'
import CardItem from './Card';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={require('./content/images/img-9.jpg').default}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem src={require('./content/images/img-2.jpg').default}
                            text="Travel through the islands of Bali in a private cruise"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={require('./content/images/img-9.jpg').default}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem src={require('./content/images/img-2.jpg').default}
                            text="Travel through the islands of Bali in a private cruise"
                            label="Luxury"
                            path="/services"
                        />
                        <CardItem src={require('./content/images/img-1.jpg').default}
                            text="Relax in the hidden mountains of Thailand eliminating worry"
                            label="Tranquility"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
