import type {NextPage} from 'next';
import {useContext, useState} from 'react';
import {Game, Timer, Flag} from '../components';
import generateMine from '../utils/mine';
import {Global} from './_app';

const Home: NextPage = () => {
  const {start, setStart} = useContext(Global);
  const [game, setGame] = useState<undefined | any[][]>();

  const startGame = () => {
    if (start && setStart) {
      setStart(false);
    }
    setGame(generateMine(9, 9, 10));
  };

  return (
    <div className="container">
      <div className="top" style={{'--mine-columns': 9} as React.CSSProperties}>
        <Flag />
        <button className="control" onClick={startGame}></button>
        <Timer />
      </div>
      <Game game={game} r={9} c={9} />
    </div>
  );
};

export default Home;
