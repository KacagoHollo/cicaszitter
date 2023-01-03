import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import cat1 from '../pictures/cat1.jpg';
import blackPaw from '../pictures/paw_black.png';
import orangePaw from '../pictures/paw_black.png';

const Navbar = () => {
    const [hidden, setHidden] = useState(true);

    const navigate = useNavigate();
    const nav = (path) => {
        console.log('rerouting');
        navigate(path);
    }
  return (
    <>
        <div className='catbox'>
            <img className='cat-1' src={cat1} alt="cat1" />
        </div>
        <div className='left'>
            <h1>
                Lusta Macska Cicaszitter
            </h1>
    </div>

    <nav className='navbar'>
    <button 
            className='paw' 
            onClick={() => setHidden(!hidden)}
        >
            <h1>Menü</h1>
           {hidden ? 
                (<img className='black-paw'
                    style={{
                        width: '300px',
                    }}
                    src={blackPaw} alt="black" 
                />) :
                (<img className='orange-paw'
                    style={{
                        width: '300px',
                    }}
                    src={orangePaw} alt="black" 
                />)
                 }  
        </button>
            
        {hidden ? ""
        // (
        // <div className='left-right'>
        //     <img className='paws'
        //         style={{
        //                 width: '16vw',
        //                 }}
        //         imageStyle={{resizeMode: 'repeat'}}
        //         src={paws} alt="paws" 
        //     /> 
        // </div>
        //             )
        
        :
            <div className='right'> 
                <button 
                    onClick={() => nav('/')}
                    >
                    Bemutatkozás
                </button>
                <button 
                    onClick={() => nav('/arak')}
                    >
                    Szolgáltatás / Árak
                </button>
                <button 
                    onClick={() => nav('/arajanlat')}
                    >
                    Árajánlat kérése
                </button>
            </div>
        }
                    
    </nav>
    </>
  )
}

export default Navbar;