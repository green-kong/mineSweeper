import '../styles/globals.css';
import '../styles/game.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {createContext, Dispatch, SetStateAction, useState} from 'react';

type Result = 'default' | 'lose' | 'win';

interface IGameState {
  start: boolean;
  result: Result;
  r: number;
  c: number;
  mine: number;
  flag: number;
  time: number;
}

interface IGlobalState {
  gameState: IGameState;
  setGameState: Dispatch<SetStateAction<IGameState>>;
}

const initial: IGameState = {
  start: false,
  result: 'default',
  r: 9,
  c: 9,
  mine: 10,
  flag: 0,
  time: 0,
};

export const Global = createContext<IGlobalState>({
  gameState: initial,
  setGameState: () => {},
});

function MyApp({Component, pageProps}: AppProps) {
  const [gameState, setGameState] = useState<IGameState>(initial);
  const globalState = {
    gameState,
    setGameState,
  };

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
