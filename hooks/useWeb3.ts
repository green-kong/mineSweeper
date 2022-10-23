import { useEffect, useState } from 'react';
import Web3 from 'web3';

export const useWeb3 = () => {
  const [account, setAccount] = useState<string>('');
  const [web3, setWeb3] = useState<Web3>();

  const getUsedAccount = async () => {
    if (!window.ethereum) return;

    const address = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    if (address && Array.isArray(address)) {
      setAccount(address[0]);
    }

    const web3 = new Web3(window.ethereum as any);
    setWeb3(web3);
  };

  useEffect(() => {
    if (!window.ethereum) return;
    getUsedAccount();
    window.ethereum.on('accountsChanged', getUsedAccount);
  }, []);

  useEffect(
    () => () => {
      if (!window.ethereum) return;
      window.ethereum.removeListener('accountsChanged', getUsedAccount);
    },
    []
  );

  return { web3, account };
};
