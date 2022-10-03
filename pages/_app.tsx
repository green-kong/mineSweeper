import '../styles/game.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
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
        <div className="preload">
          <Image
            src="/img/DIGITZERO.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/DIGITONE.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/DIGITTWO.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/DIGITTHREE.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/DIGITFOUR.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/DIGITFIVE.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/DIGITSIX.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/DIGITSEVEN.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/DIGITEIGHT.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/DIGITNINE.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/play.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/lose.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
          <Image
            src="/img/win.png"
            priority={true}
            layout="fill"
            alt="preload"
          />
        </div>
        <Component {...pageProps} />
      </Global.Provider>
    </>
  );
}

export default MyApp;
