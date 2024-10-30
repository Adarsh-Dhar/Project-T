import React from 'react';
import { connectWallet } from '../utils/ton';

interface WalletConnectProps {
  onConnect: (address: string) => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({ onConnect }) => {
  const handleConnect = async () => {
    const account = await connectWallet();
    if (account?.address) {
      onConnect(account.address);
    }
  };

  return (
    <button
      onClick={handleConnect}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
    >
      Connect Wallet
    </button>
  );
};

export default WalletConnect; 