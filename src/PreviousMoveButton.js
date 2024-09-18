import React from 'react';
import { useGame } from './GameContext';

export default function PreviousMoveButton() {
  const { previousMove } = useGame(); 

  return (
    <button id="previousMoveButton" className="button" onClick={previousMove}>
      Previous Move
    </button>
  );
}
