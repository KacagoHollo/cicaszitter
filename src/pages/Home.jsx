import React from 'react';

import yarn from '../pictures/yarn.png';
import paws from '../pictures/paws.png';

function Home() {
  return (
    <div className='home'>
      <h1>Bemutatkozás</h1>
      <p>
      Már régóta okoz problémát a cica tulajdonosoknak, hogy amikor elutaznak, barátokat, rokonokat, szomszédokat kell megkérniük, hogy vigyázzanak kedvenceikre, vagy cica panzióba kell elhelyezni őket. Mindent összevetve számukra a legjobb és mindenki számára a legkényelmesebb megoldás, ha saját otthonukba maradhatnak kedvenceik, és egy gondos, szerető cicaszitter látja el Őket, így a saját, megszokott környezetükbe maradhatnak.
      </p>
      <br />
      <p>
      Minden nap a megszokott időben kapják meg a kedvenc cica kajájukat, friss vizüket, kitisztítom az almukat és persze a játék sem maradhat el. Szükség szerint ki is szellőztetek, illetve ki is ürítem a postaládát.
      </p>
      {/* <button className='yarn'>
      <img className='yarn-y'
                    style={{
                        width: '200px',
                    }}
                    src={yarn} alt="yarn" 
                />
      </button> */}
      <img className='paws-home'
                style={{
                        width: '16vw',
                        }}
                imageStyle={{resizeMode: 'repeat'}}
                src={paws} alt="paws" 
            /> 
    </div>
  )
}

export default Home;