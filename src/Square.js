import React from 'react';
import { useGame } from './GameContext';

function Square({ index }) {
  const { board, updateBoard } = useGame();

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <button className="square" onClick={handleClick}>
      {board[index]}
    </button>
  );
}


export default Square;
