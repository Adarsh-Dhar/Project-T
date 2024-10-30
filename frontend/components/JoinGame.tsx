import React from 'react';
import { joinGame } from '../utils/ton';

interface JoinGameProps {
  contractAddress: string;
  disabled: boolean;
  onJoin: () => void;
}

const JoinGame: React.FC<JoinGameProps> = ({ contractAddress, disabled, onJoin }) => {
  const handleJoin = async () => {
    try {
      await joinGame(contractAddress);
      onJoin();
    } catch (error) {
      console.error('Error joining game:', error);
    }
  };

  return (
    <button
      onClick={handleJoin}
      disabled={disabled}
      className={`${
        disabled ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
      } text-white font-bold py-2 px-4 rounded-lg transition-colors`}
    >
      Join Game (1 TON)
    </button>
  );
};

export default JoinGame; 