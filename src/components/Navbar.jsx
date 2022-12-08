import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const nav = (path) => {
        console.log('rerouting');
        navigate(path);
    }
  return (
    <nav className='navbar' style={{backgroundColor:"#E6E9EC", height: "40px", display:"flex", alignItems: "center", justifyContent:"space-between"}}>
        <div className='right'> 
        <button 
            onClick={() => nav('/')}
            >
              Bemutatkozás
        </button>
        <button 
            onClick={() => nav('/arak')}
            >
              Árak
        </button>
        <button 
            onClick={() => nav('/arajanlat')}
            >
              Árajánlat kérése
        </button>
        </div>

    </nav>
  )
}

export default Navbar;