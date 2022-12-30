import React, {useState} from 'react';

import paws from '../pictures/paws.png';
import arrow from '../pictures/arrow.png';

function Home() {
  const [hiddenH, setHiddenH] = useState(true);
  return (
    <div className='home'>
      { hiddenH ?(
      <> 
        <h1>Bemutatkozás</h1>
        <p>
        Már régóta okoz problémát a cica tulajdonosoknak, hogy amikor elutaznak, barátokat, rokonokat, szomszédokat kell megkérniük, hogy vigyázzanak kedvenceikre, vagy cica panzióba kell elhelyezni őket. Mindent összevetve számukra a legjobb és mindenki számára a legkényelmesebb megoldás, ha saját otthonukba maradhatnak kedvenceik, és egy gondos, szerető cicaszitter látja el Őket, így a saját, megszokott környezetükbe maradhatnak.
        </p>
        <br />
        <p>
        Minden nap a megszokott időben kapják meg a kedvenc cica kajájukat, friss vizüket, kitisztítom az almukat és persze a játék sem maradhat el. Szükség szerint ki is szellőztetek, illetve ki is ürítem a postaládát.
        </p>
      </>
      ) :
        (
          <>
            <p>A kitöltött és elküldött jelentkezési lap megérkezése után rövid időn belül telefonon felveszem a kapcsolatot önökkel. Természetesen ha részletesebben szeretne tájékozódni, akkor telefonon is tudunk válaszolni minden felmerülő kérdésére.
            </p>
            <br />
            <p>
            Megbeszéljük az első találkozást, ahol meg tudok minden fontos dolgot a cicusról. A munkám lényege, hogy a cicus ugyanabba az ellátásban részesüljön, mint ha a gazdi otthon lenne. Sikeres egyeztetést követően megírjuk a szerződést és átveszem a lakáskulcsot. A találkozó természetesen díjmentes.
            </p>
          </>
        )
      }
      
      {hiddenH ? (
        <button 
        className='arrow'
        onClick={() => setHiddenH(!hiddenH)}
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
        onClick={() => setHiddenH(!hiddenH)}
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

export default Home;