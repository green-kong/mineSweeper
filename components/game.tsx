import classNames from 'classnames';
import {MouseEvent, useContext, useEffect, useState} from 'react';
import {Global} from '../pages/_app';
import openZeroSquare from '../utils/zeroSquare';
import checkOpenCnt from '../utils/checkOpenCnt';
import aroundOpen from '../utils/openAround';
import checkMine from '../utils/checkMine';

interface IGameProps {
  game: undefined | any[][];
}

const Game = ({game}: IGameProps): JSX.Element => {
  const {gameState, setGameState} = useContext(Global);
  const [activeBtn, setActiveBtn] = useState<[number, number][]>([]);
  const [wrongFlag, setWrongFlag] = useState<[number, number][]>([]);
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

    setOpenCount(0);

    setWrongFlag([]);
  }, [game, gameState.c]);

  useEffect(() => {
    const answer = gameState.r * gameState.c - gameState.mine;
    if (answer === openCount) {
      setGameState((state) => ({...state, result: 'win', start: false}));
      openAllFlag();
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

    if (flag[x][y] || open[x][y]) {
      return;
    }

    const newOpen = [...open];
    if (game[x][y] === 0) {
      const numbers = {x, y, r: gameState.r, c: gameState.c};
      const opened = openZeroSquare(numbers, game, newOpen, flag);
      const newOpenCount = checkOpenCnt(opened);
      setOpen(opened);
      setOpenCount(newOpenCount);
    } else if (game[x][y] === 'mine') {
      newOpen[x][y] = true;
      setOpen(newOpen);
      setGameState({...gameState, result: 'lose', start: false});
      setBomb([x, y]);
      openAllMine();
      checkWrongFlag();
    } else {
      newOpen[x][y] = true;
      setOpenCount((openCount) => openCount + 1);
      setOpen(newOpen);
    }
  };

  function wrongFlagClassName(i: number, index: number) {
    if (!wrongFlag.length) return false;

    for (let k = 0; k < wrongFlag.length; k++) {
      if (wrongFlag[k][0] === i && wrongFlag[k][1] === index) {
        return true;
      }
    }
    return false;
  }

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

  const openAllFlag = () => {
    const newFlag = [...flag];

    for (let i = 0; i < gameState.r; i++) {
      for (let j = 0; j < gameState.c; j++) {
        if (!open[i][j]) {
          newFlag[i][j] = true;
        }
      }
    }
    setFlag(newFlag);
    setGameState((state) => ({
      ...state,
      flag: state.mine,
    }));
  };

  const openAround = (e: MouseEvent<HTMLLIElement>) => {
    setActiveBtn([]);
    if (!game) return;
    if (gameState.result !== 'default') return;
    const x = Number(e.currentTarget.attributes[1].value);
    const y = Number(e.currentTarget.attributes[0].value);
    if (!open[x][y]) return;

    const {classList} = e.currentTarget;
    const regex = /^value/;
    let value: number = 0;
    for (let i = 0; i < classList.length; i++) {
      if (regex.test(classList[i])) {
        value = Number(classList[i].split('-')[1]);
        break;
      }
    }

    const maps = {game, open, flag};
    const numbers = {value, r: gameState.r, c: gameState.c, x, y};
    const newOpen = aroundOpen(maps, numbers);
    const newOpenCnt = checkOpenCnt(newOpen);
    const openMine = checkMine(game, open);

    if (openMine) {
      setBomb(openMine[0]);
      setGameState({...gameState, start: false, result: 'lose'});
      openAllMine();
      checkWrongFlag();
    }

    setOpen(newOpen);
    setOpenCount(newOpenCnt);
  };

  const openAllMine = () => {
    const newOpen = [...open];

    for (let i = 0; i < gameState.r; i++) {
      for (let j = 0; j < gameState.c; j++) {
        if (game && game[i][j] === 'mine' && !flag[i][j] === true) {
          newOpen[i][j] = true;
        }
      }
    }
    setOpen(newOpen);
  };

  const checkWrongFlag = () => {
    const newWrongFlag = [...wrongFlag];

    for (let i = 0; i < gameState.r; i++) {
      for (let j = 0; j < gameState.c; j++) {
        if (game && flag[i][j] && game[i][j] !== 'mine') {
          newWrongFlag.push([i, j]);
        }
      }
    }
    setWrongFlag(newWrongFlag);
  };

  const btnActive = (e: MouseEvent<HTMLLIElement>) => {
    if (gameState.result !== 'default') return;
    const newActiveBtn = [...activeBtn];
    const x = Number(e.currentTarget.attributes[1].value);
    const y = Number(e.currentTarget.attributes[0].value);

    if (open[x][y]) {
      const dirRs = [-1, -1, 0, 1, 1, 1, 0, -1];
      const dirCs = [0, 1, 1, 1, 0, -1, -1, -1];

      for (let i = 0; i < 9; i++) {
        const nr = x + dirRs[i];
        const nc = y + dirCs[i];

        if (
          nr >= 0 &&
          nc >= 0 &&
          nr < gameState.r &&
          nc < gameState.c &&
          !open[nr][nc] &&
          !flag[nr][nc]
        ) {
          newActiveBtn.push([nr, nc]);
          setActiveBtn(newActiveBtn);
        }
      }
    } else {
      newActiveBtn.push([x, y]);
      setActiveBtn(newActiveBtn);
    }
  };

  function activeClassName(index: number, i: number) {
    if (!activeBtn.length) return false;

    for (let k = 0; k < activeBtn.length; k++) {
      if (activeBtn[k][0] === index && activeBtn[k][1] === i) {
        return true;
      }
    }
    return false;
  }

  const generteRow = (value: any[], index: number): JSX.Element[] => {
    return value.map((_, i) => {
      const className = classNames('minebox', {
        [`open value-${game![index][i]}`]: open[index][i],
        close: !open[index][i],
        flag: !open[index][i] && flag[index][i],
        firework: gameState.result === 'win' && flag[index][i],
        bomb: bomb && bomb[0] === index && bomb[1] === i,
        wrongFlag: wrongFlagClassName(index, i),
        active: activeClassName(index, i),
      });

      return (
        <li
          key={`row${i}`}
          data-y={i}
          data-x={index}
          onClick={clickSquare}
          onContextMenu={flagSquare}
          onMouseUp={openAround}
          onMouseDown={btnActive}
          className={className}
        ></li>
      );
    });
  };

  const generateMap = (game: any[][]): JSX.Element[] => {
    return game.map((v, i) => {
      return (
        <li key={i}>
          <ul style={{display: 'flex'}}>{generteRow(v, i)}</ul>
        </li>
      );
    });
  };

  if (!game) return <></>;
  return <ul className="grid">{generateMap(game)}</ul>;
};

export default Game;
