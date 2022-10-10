import React from 'react';
import '../../App.css';
import Cards from '../Cards.js';
import HeroSection from '../HeroSection.js';
import Footer from '../Footer.js';


function Home() {
  return (
    <>
    <h1 className='under_nav' style={{ flex:1, flexWrap: 'wrap' }}></h1>
    <h1 className='home' style={{ flex:1, flexWrap: 'wrap' }}>WAKE 2022</h1>
    <h1 className='home_i'>
    "AN INTERNATIONAL EVENT AT IMT ATLANTIQUE" </h1>

    <h2 className='home2'>
    As part of the ArchOps industrial chair sponsored by Kelio, the International Students' Office (BDI) in collaboration with our school IMT Atlantique will organize a cultural and sporting event on December 2, 3 and 4. {'\n'}</h2>


    <h2 className='home2'>
    This event, World Atlantic Kelio Event, will gather around 200 international students from different engineering schools in Nantes, for a week-end. This is the first of two editions on the horizon of Paris 2024 Olympic Games ! The values ​​of sharing and openness are the driving force behind this event, through sporting and cultural encounters.</h2>

    <h1 className='home'>    </h1>
    </>
  );
}

export default Home;
