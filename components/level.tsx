import {useState, useContext, useEffect} from 'react';
import {Global, IGameState} from '../pages/_app';

const Level = () => {
  const {gameState, setGameState} = useContext(Global);
  const [level, setLevel] = useState<number>(1);

  const levelHandler = (lev: number) => () => {
    setLevel(lev);
  };

  useEffect(() => {
    if (level === 1) {
      const newGameState: IGameState = {
        ...gameState,
        start: false,
        r: 9,
        c: 9,
        mine: 10,
        flag: 0,
        time: 0,
        result: 'default',
      };
      setGameState(newGameState);
    } else if (level === 2) {
      const newGameState: IGameState = {
        ...gameState,
        start: false,
        r: 16,
        c: 16,
        mine: 40,
        flag: 0,
        time: 0,
        result: 'default',
      };
      setGameState(newGameState);
    } else if (level === 3) {
      const newGameState: IGameState = {
        ...gameState,
        start: false,
        r: 18,
        c: 18,
        mine: 70,
        flag: 0,
        time: 0,
        result: 'default',
      };
      setGameState(newGameState);
    }
  }, [level]);

  return (
    <>
      <ul>
        <li>
          <input
            type="radio"
            name="level"
            id="1"
            checked={level === 1}
            onChange={levelHandler(1)}
          />
          <label htmlFor="1">초급</label>
        </li>
        <li>
          <input
            type="radio"
            name="level"
            id="2"
            checked={level === 2}
            onChange={levelHandler(2)}
          />
          <label htmlFor="2">중급</label>
        </li>
        <li>
          <input
            type="radio"
            name="level"
            id="3"
            checked={level === 3}
            onChange={levelHandler(3)}
          />
          <label htmlFor="3">상급</label>
        </li>
      </ul>
    </>
  );
};

export default Level;
