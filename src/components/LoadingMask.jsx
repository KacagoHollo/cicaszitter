import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import waiting from '../pictures/waiting.jpg'
import mpaws from '../pictures/manypaw.png'



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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  return (
    <div className='thank'>
        <h1 className='first'>Köszönjük, hogy minket választott!</h1>
        <br />
        <h1 className='second'>Hamarosan felvesszük Önnel a kapcsolatot!</h1>
        <div className='meow'>
            <img className='waiting'
                        src={waiting} alt="black" 
                    />
        </div>
        <img className='mpaws'
                        src={mpaws} alt="black" 
                    />
    </div>
  )
}

export default LoadingMask