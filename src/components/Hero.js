import React from 'react'
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
            <video src={require('./content/videos/video-2.mp4').default} autoPlay loop muted />
            <h1>NOBILITY</h1>
            <p>What are you waiting for?</p>
            <div className="hero-button">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>TRAILER <i className='far fa-play-circle' /></Button>
            </div>
        </div>
    )
}

export default Hero

//confidentiality and IP assignment agreement

//master services agreement

//for derrick we give him membership redemption agreement