import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import waiting from '../pictures/waiting.jpg'


function LoadingMask() {
    const navigate = useNavigate();
    const nav = (path) => {
        console.log('home');
        navigate(path);
    }


    useEffect(() => {
      setTimeout(() => {
        nav('/')
      }, 5*1000);
    }, [])
    
  return (
    <div className='thank'>
        <h1>Köszönjük, hogy minket választott!</h1>
        <br />
        <h1 className='second'>Hamarosan felvesszük Önnel a kapcsolatot!</h1>
        <div className='meow'>
            <img className='waiting'
                        // style={{
                        //     width: '800px',
                        // }}
                        src={waiting} alt="black" 
                    />
        </div>
    </div>
  )
}

export default LoadingMask