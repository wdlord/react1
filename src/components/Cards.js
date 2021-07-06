import React from 'react'
import CardItem from './Card';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            
            <div className='headings'>
                <h1>MEET THE</h1> <h2>TEAM</h2>
            </div>
            
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem src={require('./content/images/chase-headshot.png').default}
                            text="Chase Brown"
                            label="Developer"
                            path="/services"
                        />
                        <CardItem src={require('./content/images/chase-headshot.png').default}
                            text="Chase Brown"
                            label="Developer"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem src={require('./content/images/chase-headshot.png').default}
                            text="Chase Brown"
                            label="Developer"
                            path="/services"
                        />
                        <CardItem src={require('./content/images/chase-headshot.png').default}
                            text="Chase Brown"
                            label="Developer"
                            path="/services"
                        />
                        <CardItem src={require('./content/images/chase-headshot.png').default}
                            text="Chase Brown"
                            label="Developer"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
