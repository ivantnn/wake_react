import React, { useState, useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards.js';
import HeroSection from '../HeroSection.js';
import Footer from '../Footer.js';
import { Button as Button1 } from '../Button1';
import { Button as Button2 } from '../Button2';
import { Button as Button3 } from '../Button3';
import { Link } from 'react-router-dom';


function Home() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);



  window.addEventListener('resize', showButton);

  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <h1 className='under_nav' style={{ flex:1, flexWrap: 'wrap' }}></h1>
    <h1 className='home' style={{ flex:1, flexWrap: 'wrap' }}>WAKE 2022</h1>
    <h2 className='home2'>
    "AN INTERNATIONAL EVENT AT IMT ATLANTIQUE"<br/><br/>
    As part of the ArchOps industrial chair sponsored by Kelio, the International Students' Office (BDI) in collaboration with our school IMT Atlantique will organize a cultural and sporting event on December 2, 3 and 4. {'\n'}<br/><br/>
    This event, World Atlantic Kelio Event, will gather around 200 international students from different engineering schools in Nantes, for a week-end. This is the first of two editions on the horizon of Paris 2024 Olympic Games ! The values ​​of sharing and openness are the driving force behind this event, through sporting and cultural encounters.<br/><br/><br/>


    Places are limited to 200 students, with the following limits for each school:<br/>


    <br/> IMT Atlantique Nantes - 70 students<br/>
    IMT Atlantique Brest + Rennes - 30 students<br/>
    Centrale Nantes - 50 students<br/>
    Polytech / Oniris Engineering / ICAM / Ecole Supérieure du Bois - 50 students<br/><br/>Once you sign up, you will receive an email in the coming days inviting you to buy your ticket. Your attendance will be confirmed upon receiving your payment</h2>


    <div className='who'>
    <h2>WHO?</h2>
    <br/>
    <p>All the internationals</p>
    </div>

    <div className='when'>
    <h2>WHEN?</h2>
    <br/>
    <p>2,3 and 4 of November</p>
    </div>

    <div className='where'>
    <h2>WHERE?</h2>
    <br/>
    <p>Campus IMT Atlantique <br/>Nantes</p>
    </div>

    <div className='home2'>
    <h2 className='steps'>STEPS<br/>

    </h2>
    <h2 className='home2'>
    <br/>The prices are the following:<br/>
    For those from Nantes: 20 &euro; <br/>
    For those from outside Nantes: 30 &euro; <br/><br/>

    Once you've signed up, you can conduct the payment

    After that, you can join a delegation and enjoy!

    </h2>


    </div>

    <div className='last_container'>

    <Button1
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
    >

      Schedule
    </Button1>

    <Button2
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
    >

      SIGN UP!
    </Button2>

    <Button3
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
    >

      FAQ
    </Button3>


    </div>

        </>
  );
}

export default Home;
