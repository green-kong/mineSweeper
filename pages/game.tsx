import type {NextPage} from 'next';
import {useContext, useState, useEffect} from 'react';
import {Game, Timer, Flag} from '../components';
import generateMine from '../utils/mine';
import {Global} from './_app';
import classNames from 'classnames';
import Level from '../components/level';

export type GameState = 'default' | 'lose' | 'win';

const Play: NextPage = () => {
  const {gameState, setGameState} = useContext(Global);
  const [game, setGame] = useState<undefined | any[][]>();

  useEffect(() => {
    setGame(generateMine(gameState.r, gameState.c, gameState.mine));
  }, [gameState.c]);

  const startGame = () => {
    if (!gameState || !setGameState) return;

    setGameState({
      ...gameState,
      start: false,
      result: 'default',
      time: 0,
      flag: 0,
    });
    setGame(generateMine(gameState.r, gameState.c, gameState.mine));
  };

  const controlClassName = classNames('control', {
    lose: gameState.result === 'lose',
    win: gameState.result === 'win',
  });

  return (
    <>
      <div
        className="game_container"
        style={{'--mine-columns': gameState.c} as React.CSSProperties}
      >
        <Level />
        <div className="top">
          <Flag />
          <button className={controlClassName} onClick={startGame}></button>
          <Timer />
        </div>
        <Game game={game} />
      </div>
    </>
  );
};

export default Play;
