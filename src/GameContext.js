import React, { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export function useGame() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(''));
  const [history, setHistory] = useState([]);
  const [won, setWon] = useState(false);

  const nextPlayer = () => {
    setCurrentPlayer(prev => (prev === "X" ? "O" : "X"));
  };


  const checkWin = (board) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]  // Diagonals
    ];

    return winPatterns.some(pattern =>
      pattern.every(index => board[index] === currentPlayer)
    );
  };


  const updateBoard = (index) => {
    if (!board[index] && !won) {
      
      const newBoard = board.slice();
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      
      setHistory(prevHistory => [...prevHistory, board.slice()]); //Keeping a copy of all the boards - appending current board
      

      console.log(newBoard);
      console.log(currentPlayer)
      if (checkWin(newBoard)) {
        setTimeout(() => {
          setWon(true);
          alert(`Player ${currentPlayer} wins!`);
        }, 1); 
        
      } else if (history.length === 8) {
        
        setTimeout(() => {
          alert('Draw!');
        }, 1);

      } else {
        nextPlayer();
      }
    }
  };
  
  const resetBoard = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer("X");
    setHistory([]); 
    setWon(false);
  };

  const previousMove = () => {
    if (history.length > 0 && !won) {
      const lastBoard = history.pop(); //getting last board and setting board to it
      setBoard(lastBoard);
      nextPlayer();
    }
  };

  return (
    <GameContext.Provider value={{ currentPlayer, board, updateBoard, resetBoard, previousMove }}>
      {children}
    </GameContext.Provider>
  );
}
