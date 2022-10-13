import React from 'react';
import '../../App.css';
import Cards from '../Cards.js';
import HeroSection from '../HeroSection.js';
import Footer from '../Footer.js';


function Home() {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <h1 className='under_nav' style={{ flex:1, flexWrap: 'wrap' }}></h1>
    <h1 className='home' style={{ flex:1, flexWrap: 'wrap' }}>WAKE 2022</h1>
    <h2 className='home2'>
    "AN INTERNATIONAL EVENT AT IMT ATLANTIQUE"<br/><br/>
    As part of the ArchOps industrial chair sponsored by Kelio, the International Students' Office (BDI) in collaboration with our school IMT Atlantique will organize a cultural and sporting event on December 2, 3 and 4. {'\n'}</h2>


    <h2 className='home2'>
    This event, World Atlantic Kelio Event, will gather around 200 international students from different engineering schools in Nantes, for a week-end. This is the first of two editions on the horizon of Paris 2024 Olympic Games ! The values ​​of sharing and openness are the driving force behind this event, through sporting and cultural encounters.<br/><br/><br/>


    Places are limited to 200 students, with the following limits for each school:<br/>


    <br/> IMT Atlantique Nantes - 70 students<br/>
    IMT Atlantique Brest - 15 students<br/>
    IMT Atlantique Rennes - 15 students<br/>
    Centrale Nantes - 50 students<br/>
    Polytech Nantes - 20 students<br/>
    Oniris Nantes - 7 students<br/>
    ICAM Nantes - 7 students<br/>
    Ecole Supérieure du Bois Nantes - 6<br/><br/>Once you sign up, you will receive an email in the coming days inviting you to buy your ticket. Your attendance will be confirmed upon receiving your payment</h2>

    </>
  );
}

export default Home;
