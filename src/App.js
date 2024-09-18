import React from 'react';
import { GameProvider } from './GameContext';
import Board from './Board';
import NewGameButton from './NewGameButton'; 
import PreviousMoveButton from './PreviousMoveButton'; 

function App() {
  return (
    <GameProvider>
      <div id="game">
        <Board />
        <div id="buttons">
          <NewGameButton />
          <PreviousMoveButton />
        </div>
      </div>
    </GameProvider>
  );
}

export default App;
