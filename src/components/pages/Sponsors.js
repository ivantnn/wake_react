import React from 'react';
import '../../App.css';

export default function Sponsors() {
  return (<>
  <h1 className='sponsors'>SPONSORS</h1>
  <a href='https://www.kelio.com/fr/kelio.html'>
  <img src={require("../../Images/Sponsor.png")} width="100%" height="20%" alt=""/>
  </a>
  <a href='https://www.imt-atlantique.fr/fr'>
  <img src={require("../../Images/Sponsor2.png")} width="100%" height="20%" alt=""/>
  </a>
  </>);
}
