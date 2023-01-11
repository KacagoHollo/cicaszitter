import React, {useState} from 'react';

import paws from '../pictures/paws.png';
import arrow from '../pictures/arrow.png';

function Price() {
  const [hiddenP, setHiddenP] = useState(true);

  return (
    <div className='price'>
      { hiddenP ?(
      <> 
        <h1>Szolgáltatás</h1>
        <p>
        A látogatási idő 35-40 perc.
        </p>
        <br />
        <p>
        Ez a következőket tartalmazza: 
        </p>
        <br />
        <ul>
          <li>- etetés</li>
          <li>- vízcsere</li>
          <li>- alom tisztítás</li>
          <li>- fotó küldés a gazdinak</li>
          <li>- szellőztetés</li>
          <li>- növény locsolás</li>
          <li>- postaláda ürítés</li>
        </ul>
        <br />
        <p>
        A szolgáltatás ezekben a kerületekben érhető el: I., II., III.,V., VI., VII. valamint a VIII., IX., X., XI., XII., XIII., XIV. kerületek egyes részein tudok házhoz menni, ezekről egyeztetni kell.
        </p>
        <br />
        <ul className='contact'>
          <u className='cTitle'>Elérhetőségeink:</u> 
          <li>- +36 ... ....</li>
          <li>- lustamacskacicaszitter@gmail.com</li>
        </ul>
      </>
      ) :
        (
          <>
            <h1>Árak</h1>
            <br />
            <ul>
              <li>- 1-3 nap / 1 cica / 1 alkalom: <span>4200ft</span></li>
              <li>- 4-7 nap / 1 cica / 1 alkalom: <span>4000ft</span></li>
              <li>- 7 napnál hosszabb / 1 cica / 1 alkalom: <span>3800ft</span></li>
              <br />
              <li><span>+500ft</span>/ cica</li>
              <br />
              <li>- 1-3 nap / 1 cica /  2 alkalom: <span> 8000ft</span></li>
              <li>- 4-7 nap / 1 cica / 2 alkalom: <span> 7500ft</span></li>
              <li>- 7 napnál hosszabb  /1 cica / 2 alkalom: <span> 6900ft</span></li>
              <br />
              <li>+ cica a napi kettő alkalomnál nincs felszámolva</li>
              <br />
              <li>ÜNNEPNAP <span>+1000ft</span> / alkalom</li>
              <br />
            </ul>
            
          </>
        )
      }
      
      {hiddenP ? (
        <button 
        className='arrow'
        onClick={() => setHiddenP(!hiddenP)}
        style={{
          width: '8vw',
          }}
        >      
              <img className='arrow-up'
                  src={arrow} alt="paws" 
              /> 
        </button>
        ) :
        <button 
        className='arrowW'
        onClick={() => setHiddenP(!hiddenP)}
        style={{
          width: '8vw',
          }}
        >      
              <img className='arrow-up'
                  src={arrow} alt="paws" 
              /> 
        </button>
}


      <img className='paws-home'
                style={{
                        width: '16vw',
                      }}
                src={paws} alt="paws" 
            /> 
      

    </div>
  )
}

export default Price;