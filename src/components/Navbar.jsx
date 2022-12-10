import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import cat1 from '../pictures/cat1.jpg'
import blackPaw from '../pictures/paw_black.png'
import orangePaw from '../pictures/paw_black.png'

const Navbar = () => {
    const [hidden, setHidden] = useState(true);


    const navigate = useNavigate();
    const nav = (path) => {
        console.log('rerouting');
        navigate(path);
    }
  return (
    <nav className='navbar'>
        <div className='left'>
            <img className='cat-1' src={cat1} alt="cat1" />
            <h1>
                Lusta Macska Cicaszitter
            </h1>
            
        </div>
        {hidden ? "" :
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
        }
        <button 
            // style={{ background: `url(${orangePaw})`,
            //     backgroundRepeat: 'no-repeat',
            //     width: '50px',
            //     height: '50px' 
            
            // }}
            className='paw' 
            onClick={() => setHidden(!hidden)}
        >
           {hidden ? 
                (<img className='black-paw'
                    style={{
                        width: '80px',
                    }}
                    src={blackPaw} alt="black" 
                />) :
                (<img className='orange-paw'
                    style={{
                        width: '80px',
                        color: '#905132'
                    }}
                    src={orangePaw} alt="black" 
                />)
                 }  
        </button>
    </nav>
  )
}

export default Navbar;