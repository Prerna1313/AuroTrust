'use client';
import { useWallet as useAptosWallet } from '@aptos-labs/wallet-adapter-react';

export function useWallet() {
  const {
    connect,
    disconnect,
    account,
    connected,
    wallets,
    wallet: currentWallet,
  } = useAptosWallet();

  const connectWallet = async (walletName: string) => {
    try {
      const selectedWallet = wallets.find(w => w.name === walletName);
      if (selectedWallet) {
        await connect(selectedWallet.name);
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      throw error;
    }
  };

  const disconnectWallet = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
      throw error;
    }
  };

  return {
    connectWallet,
    disconnectWallet,
    account,
    connected,
    wallets,
    currentWallet,
  };
}

