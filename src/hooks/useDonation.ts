'use client';

import { useWallet } from '@aptos-labs/wallet-adapter-react';
import { aptos, MODULE_ADDRESS } from '@/lib/aptos';

export function useDonation() {
  const { account, signAndSubmitTransaction } = useWallet();

  const donate = async (recipientAddress: string, amountInAPT: number) => {
    if (!account) throw new Error('Connect wallet first');

    const amountInOctas = Math.floor(amountInAPT * 100_000_000);

    const transaction = await signAndSubmitTransaction({
      sender: account.address,
      data: {
        function: `${MODULE_ADDRESS}::simple_donation::donate`,
        typeArguments: [],
        functionArguments: [recipientAddress, amountInOctas],
      },
    });

    const response = await aptos.waitForTransaction({
      transactionHash: transaction.hash,
    });

    return { success: true, hash: transaction.hash, transaction: response };
  };

  return { donate };
}
