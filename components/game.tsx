import classNames from 'classnames';
import {MouseEvent, useContext, useEffect, useState} from 'react';
import {Global} from '../pages/_app';
import openZeroSquare from '../utils/zeroSquare';
import checkOpenCnt from '../utils/checkOpenCnt';

interface IGameProps {
  game: undefined | any[][];
}

const Game = ({game}: IGameProps): JSX.Element => {
  const {gameState, setGameState} = useContext(Global);
  const [openCount, setOpenCount] = useState<number>(0);
  const [open, setOpen] = useState<boolean[][]>(
    new Array(gameState.r)
      .fill(false)
      .map(() => new Array(gameState.c).fill(false))
  );
  const [flag, setFlag] = useState<boolean[][]>(
    new Array(gameState.r)
      .fill(false)
      .map(() => new Array(gameState.c).fill(false))
  );
  const [bomb, setBomb] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (!game) return;
    const newopen = new Array(gameState.r)
      .fill(false)
      .map(() => new Array(gameState.c).fill(false));
    setOpen(newopen);

    const newFlag = new Array(gameState.r)
      .fill(false)
      .map(() => new Array(gameState.c).fill(false));
    setFlag(newFlag);
  }, [game]);

  useEffect(() => {
    const answer = gameState.r * gameState.c - gameState.mine;
    if (answer === openCount) {
      setGameState({...gameState, result: 'win', start: false});
      setWinFlag();
    }
  }, [openCount]);

  const clickSquare = (e: MouseEvent<HTMLLIElement>) => {
    if (!game) return;
    if (gameState.result !== 'default') return;

    if (!gameState.start) {
      setGameState({...gameState, start: true});
    }

    const x = Number(e.currentTarget.attributes[1].value);
    const y = Number(e.currentTarget.attributes[0].value);

    if (flag[x][y]) {
      return;
    }

    const newOpen = [...open];
    if (game[x][y] === 0) {
      const opened = openZeroSquare(x, y, game, newOpen, flag);
      const newOpenCount = checkOpenCnt(opened);
      setOpenCount(newOpenCount);
      setOpen(opened);
    } else if (game[x][y] === 'mine') {
      newOpen[x][y] = true;
      setOpen(newOpen);
      setGameState({...gameState, result: 'lose', start: false});
      setBomb([x, y]);
    } else {
      newOpen[x][y] = true;
      setOpenCount((openCount) => openCount + 1);
      setOpen(newOpen);
    }
  };

  const flagSquare = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    if (gameState.result !== 'default') return;
    if (!gameState.start) {
      setGameState({...gameState, start: true});
    }
    const newFlag = [...flag];

    const x = Number(e.currentTarget.attributes[1].value);
    const y = Number(e.currentTarget.attributes[0].value);

    if (open[x][y]) {
      return;
    }

    if (newFlag[x][y]) {
      setGameState({...gameState, flag: gameState.flag - 1});
    } else {
      setGameState({...gameState, flag: gameState.flag + 1});
    }

    newFlag[x][y] = !newFlag[x][y];

    setFlag(newFlag);
  };

  const setWinFlag = () => {
    const newFlag = [...flag];

    for (let i = 0; i < gameState.r; i++) {
      for (let j = 0; j < gameState.c; j++) {
        if (!open[i][j]) {
          newFlag[i][j] = true;
        }
      }
    }
    setFlag(newFlag);
  };

  const openAround = () => {};

  const generteRow = (value: any[], index: number): JSX.Element[] => {
    return value.map((_, i) => {
      // TODO(green-kong): class 추가하기
      // .wrongFlag : flag 잘못 꽂았다!
      const className = classNames('minebox', {
        [`open value-${game![i][index]}`]: open[i][index],
        close: !open[i][index],
        flag: !open[i][index] && flag[i][index],
        firework: gameState.result === 'win' && flag[i][index],
        bomb: bomb && bomb[0] === i && bomb[1] === index,
      });

      return (
        <li
          key={`row${i}`}
          data-y={index}
          data-x={i}
          onClick={clickSquare}
          onContextMenu={flagSquare}
          onMouseDown={openAround}
          className={className}
        ></li>
      );
    });
  };

  const generateMap = (game: any[][]): JSX.Element[] => {
    return game.map((v, i) => {
      return (
        <li key={i}>
          <ul>{generteRow(v, i)}</ul>
        </li>
      );
    });
  };

  if (!game) return <></>;
  return <ul className="grid">{generateMap(game)}</ul>;
};

export default Game;
