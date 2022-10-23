import type { NextPage } from 'next';
import Router from 'next/router';
import { useContext, useEffect } from 'react';
import { useWeb3 } from '../hooks/useWeb3';
import { Global, IUser } from './_app';

const Home: NextPage = () => {
  const { userState, setUserState } = useContext(Global);

  const { account } = useWeb3();

  useEffect(() => {
    if (account === '') return;

    /*
    TODO: account 백엔드에 보내서 회원가입 되어있는지 확인하기.
    회원 가입 안되어 있으면 회원가입 페이지로 이동
    */

    const newUserState: IUser = {
      ...userState,
      login: true,
      alias: account,
    };

    setUserState(newUserState);
  }, [account]);

  return <>{account}</>;
};

export default Home;
