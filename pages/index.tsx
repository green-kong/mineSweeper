import type {NextPage} from 'next';
import {useContext, useEffect, useState} from 'react';
import Game from '../components/game';
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
    <>
      <button onClick={startGame}>새게임</button>
      <Game game={game} r={9} c={9} />
    </>
  );
};

export default Home;
