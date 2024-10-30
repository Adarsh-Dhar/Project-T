import { useState, useEffect } from 'react';
import WalletConnect from '../components/WalletConnect';
import GameBoard from '../components/GameBoard';
import JoinGame from '../components/JoinGame';
import { GameState } from '../types/game';

const CONTRACT_ADDRESS = 'YOUR_CONTRACT_ADDRESS_HERE';

export default function Home() {
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [gameState, setGameState] = useState<GameState>({
    gameState: 0,
    currentPlayers: 0,
    totalPot: 0,
    players: []
  });

  const fetchGameState = async () => {
    // TODO: Implement actual contract interaction
    // This is where you'd call your contract's get methods
  };

  useEffect(() => {
    const interval = setInterval(fetchGameState, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Bech Ya Card Game</h1>
          {!walletAddress ? (
            <WalletConnect onConnect={setWalletAddress} />
          ) : (
            <div className="text-white">
              <span className="text-gray-400">Connected: </span>
              {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
            </div>
          )}
        </div>

        <GameBoard gameState={gameState} />

        <div className="mt-8 flex justify-center">
          <JoinGame
            contractAddress={CONTRACT_ADDRESS}
            disabled={!walletAddress || gameState.gameState !== 0}
            onJoin={fetchGameState}
          />
        </div>
      </div>
    </div>
  );
} 