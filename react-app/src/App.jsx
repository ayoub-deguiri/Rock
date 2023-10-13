import { useState, useEffect } from 'react';

import Game from './componants/Game'
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      setFade(true);
    }
  }, [gameStarted]);

  return (
    <div className='main-page'>
      <div  className={`Intro ${fade ? 'fade-out' : ''}`}>

      
      <h1>Rock | Paper | Scissors</h1>
      <br />
      <button onClick={() => setGameStarted(true)}  className='start'>Start</button>
      <div className="container" style={{marginTop:'5rem'}}>
                            <h3 className="title has-text-centered"> made with love | Ayoub Deguiri</h3>
                    </div>
      </div>

      <div>

    
      {gameStarted ? <Game /> : null}
      </div>
      
    </div>
  );
}

export default App;
