import React from 'react';
import ReactPlayer from 'react-player';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {HeroVideo} from 'react-hero-video';
import { Player } from 'video-react';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
      <Button
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
      >
      SIGN UP!
      </Button>
      </div>
    </div>
  );
}

export default HeroSection;
