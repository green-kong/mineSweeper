import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Game from '../components/game';
import generateMine from '../utils/mine';

const Home: NextPage = () => {
  const [game, setGame] = useState<undefined | any[][]>();

  const startGame = () => {
    setGame(generateMine(9, 9, 10));
  };

  useEffect(() => {
    if (!game) return;
  }, [game]);

  return (
    <>
      <button onClick={startGame}>게임시작</button>
      <Game game={game} />
    </>
  );
};

export default Home;
