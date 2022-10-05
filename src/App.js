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
          <Route path='/' exact component={Home} />
          <Route path='/sponsors' component={Sponsors} />
          <Route path='/faq' component={FAQ} />
          <Route path='/schedule' component={Schedule} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
