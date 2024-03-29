import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Bid from './pages/Bid';
import Price from './pages/Price';

import background from './pictures/backcat.png'
import fb from './pictures/fb.png'
import LoadingMask from './components/LoadingMask';


function App() {
  
  return (
    <div className="App"> 
      <Navbar/>
      <main >
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/arak' element={<Price />}/>
          <Route path='/arajanlat' element={<Bid />}/>
          <Route path='/siker' element={<LoadingMask />}/>
        </Routes>
      <img 
        className='background'
        // style={{ 
        // width: '30%',
        // }} 
        src={background}
        alt="Cat Bacground Pic"
      />
      </main>
      
      {/* <img className='fb' src={fb} alt="facebook" /> */}
      <a href="https://www.facebook.com/profile.php?id=100088085660612" target="_blank" rel="noreferrer">
        <img className='fb' src={fb} alt="facebook"/>
      </a>
    </div>
  );
}

export default App;
