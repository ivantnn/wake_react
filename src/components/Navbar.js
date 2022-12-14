import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

//<nav class="navbar navbar-light bg-light">
//        <a class="navbar-brand" href="#">
//        <img src={require("../wake_logo.png")} width="30" height="30" alt=""/>
//        </a>https://youtube.com/watch?v=OnWKPPQuvi0&feature=share&utm_source=EKLEiJECCKjOmKnC5IiRIQ
//     </nav>

function Navbar() {
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
      <nav className='navbar'>
        <div className='navbar-container'>
          <img src={require("../Images/Small_logo_Cut.png")} width="80" height="80" alt=""/>


          <Link to='/' className='font-face-gm' onClick={closeMobileMenu}>
          WAKE
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <div className='nav-menu'>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.1.1/css/all.css" />

            <li className='nav-item'>
              <a
                href="https://www.linkedin.com/company/bdi-imt-atlantique/"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class='fab fa-linkedin'></i>
              </a>
            </li>

            <li className='nav-item'>
              <a
                href="https://instagram.com/w.a.k.e.2022?igshid=YmMyMTA2M2Y="
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class='fab fa-instagram'></i>
              </a>
            </li>

            <li className='nav-item'>
              <a
                href="https://www.facebook.com/profile.php?id=100086266312362"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <i class='fab fa-facebook'></i>
              </a>
            </li>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li>
              <a
                href='https://docs.google.com/forms/d/e/1FAIpQLSesdizNVVpdZ9LxQhCFYhHBeYAMOrRjfhTTM9zGvRI0CQXBlw/viewform'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                SIGN-UP
              </a>
            </li>

            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/schedule'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Schedule
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/sponsors'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sponsors
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/faq'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ
              </Link>
            </li>



          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
