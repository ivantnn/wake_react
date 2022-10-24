import React from 'react';
import { Button as Button1 } from '../Button1';
import { Button as Button2 } from '../Button2';
import { Button as Button3 } from '../Button3';
import '../../App.css';

export default function Schedule() {
  return (<>

  <div className='schedule_overall'>
  <h1 className='sponsors'>CURIOUS TO SEE WHAT AWAITS FOR YOU?</h1>
  <img src={require("../../Images/schedule-01.jpg")} width="80%" height="20%" alt="" class='center_image'/>

  <h2 className='schedule_drinks'>
  The WAKE will begin with a welcome drinks and ceremony in the Forum at the IMT Nantes campus...</h2>


  <h2 className='schedule_mondovision'>

  <br/><br/>
  Dinner will be served in the cafeteria on campus, after which we’ll kick things off with Mondovision, our take on Eurovision!. <br/><br/>

  </h2>

  <h2 className='schedule_saturday'>


  Saturday will begin with the opening race and then the delegations will split. <br/><br/>

  One delegation will go to the IMT gym, and the other will cross the road to the party tickets for the sports matches. <br/><br/>

   </h2>

  <h2 className='schedule_nantes'>

  After lunch in the gym, we will go to the centre of Nantes for the rally. <br/><br/>

  </h2>


  <h2 className='schedule_singing'>

  Here everyone officially will be welcomed to the metropolitan area. <br/><br/>

  And then return back to campus for dinner. After dinner, begins the chance to show off multinational talents. <br/><br/>

  </h2>


  <h2 className='schedule_goodbye'>

  The next day resumes with more sports, which will conclude at lunch. <br/><br/>

  After lunch, the closing ceremony. The world ceremony will be held before everyone goes home..
  </h2>

  </div>

    <div className='last_container'>
    <Button2
        className='btns'
        buttonStyle='btn--outline'
        buttonSize='btn--large'
    >

      JOIN US NOW!
    </Button2>

      </div>

  </>);
}
