import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home.js';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Sponsors from './components/pages/Sponsors.js';
import FAQ from './components/pages/FAQ.js';
import Schedule from './components/pages/Schedule.js';

function App() {

   useEffect(() => {
    document.title = "WAKE 2022"
  }, []);

  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact element={<Home/>} />
          <Route path='/sponsors' element={<Sponsors/>} />
          <Route path='/faq' element={<FAQ/>} />
          <Route path='/schedule' element={<Schedule/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
