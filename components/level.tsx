import classNames from 'classnames';
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
        r: 16,
        c: 30,
        mine: 99,
        flag: 0,
        time: 0,
        result: 'default',
      };
      setGameState(newGameState);
    }
  }, [level]);

  const onKeydown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.currentTarget.click();
    }
  };

  return (
    <>
      <div className="level_box">
        <span className={classNames('level', {active: level === 1})}>
          <input
            type="radio"
            name="level"
            id="level1"
            checked={level === 1}
            onChange={levelHandler(1)}
          />
          <label htmlFor="level1" tabIndex={0} onKeyDown={onKeydown}>
            Beginner
          </label>
        </span>
        <span className={classNames('level', {active: level === 2})}>
          <input
            type="radio"
            name="level"
            id="level2"
            checked={level === 2}
            onChange={levelHandler(2)}
          />
          <label htmlFor="level2" tabIndex={0} onKeyDown={onKeydown}>
            Intermediate
          </label>
        </span>
        <span className={classNames('level', {active: level === 3})}>
          <input
            type="radio"
            name="level"
            id="level3"
            checked={level === 3}
            onChange={levelHandler(3)}
          />
          <label htmlFor="level3" tabIndex={0} onKeyDown={onKeydown}>
            Expert
          </label>
        </span>
      </div>
    </>
  );
};

export default Level;
