import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {createContext, Dispatch, SetStateAction, useState} from 'react';

interface IGlobalState {
  start?: boolean;
  setStart?: Dispatch<SetStateAction<boolean>>;
}

export const Global = createContext<IGlobalState>({});

function MyApp({Component, pageProps}: AppProps) {
  const [start, setStart] = useState<boolean>(false);

  const globalState = {
    start,
    setStart,
  };

  return (
    <Global.Provider value={globalState}>
      <Component {...pageProps} />
    </Global.Provider>
  );
}

export default MyApp;
