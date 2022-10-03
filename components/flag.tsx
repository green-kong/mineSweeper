import {useContext, useEffect, useState} from 'react';
import {Global} from '../pages/_app';

const Flag = () => {
  const {gameState, setGameState} = useContext(Global);
  const [leftMine, setLeftMine] = useState<number>(
    gameState.mine - gameState.flag
  );

  useEffect(() => {
    setLeftMine(gameState.mine - gameState.flag);
  }, [gameState.flag]);

  return (
    <div className="flagCount">
      <span className={`digit digit-${Math.floor(leftMine / 100)}`}></span>
      <span
        className={`digit digit-${Math.floor((leftMine % 100) / 10)}`}
      ></span>
      <span className={`digit digit-${leftMine % 10}`}></span>
    </div>
  );
};

export default Flag;
