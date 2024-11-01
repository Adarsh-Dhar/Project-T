import { useState, useEffect } from 'react';
import ChessBoard from '../components/chess/ChessBoard';
import { ChessGameState } from '../types/chess';
import { getInitialGameState, isValidMove } from '../utils/chess';

export default function ChessGame() {
  const [gameState, setGameState] = useState<ChessGameState>(getInitialGameState());
  const [playerColor] = useState<'white' | 'black'>('white'); // In real app, this would be determined by the server

  const handleMove = (from: string, to: string) => {
    if (!isValidMove(from, to, gameState)) {
      return;
    }

    const newBoard = new Map(gameState.board);
    const piece = newBoard.get(from);
    
    if (piece) {
      newBoard.delete(from);
      piece.position = to;
      newBoard.set(to, piece);
      
      setGameState({
        ...gameState,
        board: newBoard,
        currentTurn: gameState.currentTurn === 'white' ? 'black' : 'white',
        lastMove: { from, to, piece }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Chess Game</h1>
          <div className="text-white">
            Turn: {gameState.currentTurn}
            {gameState.isCheck && ' - Check!'}
            {gameState.isCheckmate && ' - Checkmate!'}
          </div>
        </div>

        <div className="flex justify-center">
          <ChessBoard
            gameState={gameState}
            onMove={handleMove}
            playerColor={playerColor}
          />
        </div>
      </div>
    </div>
  );
} 