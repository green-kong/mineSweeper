import {useContext, useEffect, useRef, useState} from 'react';
import {Global} from '../pages/_app';

const Timer = () => {
  const {gameState, setGameState} = useContext(Global);
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (gameState.start) {
      setGameState({...gameState, time: 0});
      interval.current = setInterval(() => {
        setGameState((gameState) => ({...gameState, time: gameState.time + 1}));
      }, 1000);
    } else {
      clearInterval(interval.current as NodeJS.Timeout);
    }
  }, [gameState.start]);

  return (
    <div className="timer">
      <span
        className={`digit digit-${
          gameState.time > 999 ? 9 : Math.floor(gameState.time / 100)
        }`}
      ></span>
      <span
        className={`digit digit-${
          gameState.time > 999 ? 9 : Math.floor((gameState.time % 100) / 10)
        }`}
      ></span>
      <span
        className={`digit digit-${
          gameState.time > 999 ? 9 : gameState.time % 10
        }`}
      ></span>
    </div>
  );
};

export default Timer;
