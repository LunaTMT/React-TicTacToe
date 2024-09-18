import React from 'react';
import { useGame } from './GameContext';

export default function NewGameButton() {
  const { resetBoard } = useGame(); 

  return (
    <button id="NewGameButton" className="button" onClick={resetBoard}>
      New Game
    </button>
  );
}
