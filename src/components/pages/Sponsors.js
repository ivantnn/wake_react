import React from 'react';
import '../../App.css';

export default function Sponsors() {
  return (<>
  <h1 className='sponsors'>SPONSORS</h1>
  <a href='https://www.kelio.com/fr/kelio.html'>
  <img src={require("../../Images/Sponsor.png")} width="100%" height="20%" alt=""/>
  </a>
  <h2 className='sponsors2'>
  "Kelio provides you with reliable and precise monitoring of the attendance times, absences and activities of your employees. Thanks to the HR portal that can be customized to match your company's colors and operations, you can easily access all the information you need on a daily basis on Kelio."<br/><br/>
  "Kelio is also complete access control and premises security software. Coupled with your HR software, you condition access to working hours and absence schedules. Your data is shared and you benefit from a single and unique platform!"</h2>
  <a href='https://www.imt-atlantique.fr/fr'>
  <img src={require("../../Images/Sponsor2.png")} width="30%" height="10%" alt=""/>
  </a>
  </>);
}
