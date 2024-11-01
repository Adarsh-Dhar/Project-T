import React, { useState } from 'react';
import { ChessGameState, ChessPiece } from '../../types/chess';
import ChessSquare from './ChessSquare';

interface ChessBoardProps {
  gameState: ChessGameState;
  onMove: (from: string, to: string) => void;
  playerColor: 'white' | 'black';
}

const ChessBoard: React.FC<ChessBoardProps> = ({ gameState, onMove, playerColor }) => {
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
  
  const handleSquareClick = (position: string) => {
    if (!selectedSquare) {
      // Select piece if it's the player's turn
      const piece = gameState.board.get(position);
      if (piece && piece.color === gameState.currentTurn) {
        setSelectedSquare(position);
      }
    } else {
      // Move piece if valid
      if (position !== selectedSquare) {
        onMove(selectedSquare, position);
      }
      setSelectedSquare(null);
    }
  };

  return (
    <div className="grid grid-cols-8 gap-0 w-[640px] h-[640px] bg-gray-800 p-4 rounded-lg">
      {ranks.map((rank) => (
        files.map((file) => {
          const position = `${file}${rank}`;
          const piece = gameState.board.get(position);
          const isSelected = position === selectedSquare;
          
          return (
            <ChessSquare
              key={position}
              position={position}
              piece={piece}
              isSelected={isSelected}
              onClick={() => handleSquareClick(position)}
              isLight={(files.indexOf(file) + ranks.indexOf(rank)) % 2 === 0}
            />
          );
        })
      ))}
    </div>
  );
};

export default ChessBoard; 