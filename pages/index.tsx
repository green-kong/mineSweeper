import type {NextPage} from 'next';
import {useEffect, useState} from 'react';
import Game from '../components/game';
import generateMine from '../utils/mine';

const Home: NextPage = () => {
  const [start, setStart] = useState<boolean>(false);
  const [game, setGame] = useState<undefined | any[][]>();

  const startGame = () => {
    if (!start) {
      setStart(true);
    }
    setGame(generateMine(9, 9, 10));
  };

  useEffect(() => {
    if (!game) return;
  }, [game]);

  return (
    <>
      <button onClick={startGame}>게임시작</button>
      <Game game={game} r={9} c={9} />
    </>
  );
};

export default Home;
