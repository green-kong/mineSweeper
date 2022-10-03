import type {NextPage} from 'next';
import {useContext, useEffect, useState} from 'react';
import Game from '../components/game';
import Timer from '../components/timer';
import generateMine from '../utils/mine';
import {Global} from './_app';
import classNames from 'classnames';

export type GameState = 'default' | 'lose' | 'win';

const Home: NextPage = () => {
  const {start, setStart} = useContext(Global);
  const [game, setGame] = useState<undefined | any[][]>();
  const [result, setResult] = useState<GameState>('default');
  const [r, setR] = useState<number>(9);
  const [c, setC] = useState<number>(9);
  const [mine, setMine] = useState<number>(10);

  useEffect(() => {
    setGame(generateMine(r, c, mine));
  }, []);

  const startGame = () => {
    if (start && setStart) {
      setStart(false);
    }
    setResult('default');
    setGame(generateMine(r, c, mine));
  };

  const controlClassName = classNames('control', {
    lose: result === 'lose',
    win: result === 'win',
  });

  return (
    <div className="container">
      <div className="top" style={{'--mine-columns': c} as React.CSSProperties}>
        <div className="flag"></div>
        <button className={controlClassName} onClick={startGame}></button>
        <Timer />
      </div>
      <Game game={game} r={r} c={c} setResult={setResult} result={result} />
    </div>
  );
};

export default Home;
