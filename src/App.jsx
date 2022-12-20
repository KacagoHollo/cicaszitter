import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Bid from './pages/Bid';
import Price from './pages/Price';

import background from './pictures/backcat.png'

function App() {
  return (
    <div className="App"> 
      
      
      <Navbar/>
      <main >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/arak' element={<Price />}/>
          <Route path='/arajanlat' element={<Bid />}/>
        </Routes>
      <img 
        className='background'
        style={{ 
        width: '30%',
        }} 
        src={background}
        alt="Cat Bacground Pic"
      />
      </main>
    </div>
  );
}

export default App;
