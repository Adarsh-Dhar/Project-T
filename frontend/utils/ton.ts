import { TonConnect } from '@tonconnect/sdk';
import { Address } from 'ton-core';

const tonConnect = new TonConnect();

export const connectWallet = async () => {
  try {
    await tonConnect.connect();
    return tonConnect.account;
  } catch (error) {
    console.error('Error connecting wallet:', error);
    return null;
  }
};

export const joinGame = async (contractAddress: string) => {
  if (!tonConnect.account) {
    throw new Error('Wallet not connected');
  }

  // Send transaction to join game
  const transaction = {
    to: Address.parse(contractAddress),
    value: '1000000000', // 1 TON
    payload: '', // Empty payload for simple transfer
  };

  return await tonConnect.sendTransaction(transaction);
}; 