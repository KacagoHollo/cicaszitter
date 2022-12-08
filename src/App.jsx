import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Bid from './pages/Bid';
import Price from './pages/Price';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/arak' element={<Price />}/>
          <Route path='/arajanlat' element={<Bid />}/>
        </Routes>
    </div>
  );
}

export default App;
