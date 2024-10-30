import React from 'react';
import { GameState } from '../types/game';

interface GameBoardProps {
  gameState: GameState;
}

const GameBoard: React.FC<GameBoardProps> = ({ gameState }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="text-white mb-4">
        <h2 className="text-2xl font-bold mb-2">Game Status</h2>
        <p>State: {gameState.gameState === 0 ? 'Waiting' : gameState.gameState === 1 ? 'In Progress' : 'Completed'}</p>
        <p>Players: {gameState.currentPlayers} / 6</p>
        <p>Total Pot: {gameState.totalPot / 1000000000} TON</p>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {gameState.players.map((player, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg">
            <p className="text-white text-sm truncate">{player.address}</p>
            <p className="text-green-400">{player.stake / 1000000000} TON</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard; 