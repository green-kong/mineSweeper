import '../styles/globals.css';
import '../styles/game.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import Router from 'next/router';

type Result = 'default' | 'lose' | 'win';

export interface IGameState {
  start: boolean;
  result: Result;
  r: number;
  c: number;
  mine: number;
  flag: number;
  time: number;
}

export interface IUser {
  login: boolean;
  alias: string;
}

interface IGlobalState {
  gameState: IGameState;
  setGameState: Dispatch<SetStateAction<IGameState>>;
  userState: IUser;
  setUserState: Dispatch<SetStateAction<IUser>>;
}

const initialUser: IUser = {
  login: false,
  alias: '',
};

const initial: IGameState = {
  start: false,
  result: 'default',
  r: 16,
  c: 16,
  mine: 40,
  flag: 0,
  time: 0,
};

export const Global = createContext<IGlobalState>({
  gameState: initial,
  setGameState: () => {},
  userState: initialUser,
  setUserState: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [gameState, setGameState] = useState<IGameState>(initial);
  const [userState, setUserState] = useState<IUser>(initialUser);

  const globalState = {
    gameState,
    setGameState,
    userState,
    setUserState,
  };

  useEffect(() => {
    if (!window.ethereum) {
      Router.push('/metamask');
      return;
    }
  }, []);

  return (
    <>
      <Head>
        <title>Mine Sweeper</title>
      </Head>
      <Global.Provider value={globalState}>
        <Component {...pageProps} />
      </Global.Provider>
    </>
  );
}

export default MyApp;
