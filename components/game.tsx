import classNames from 'classnames';
import {MouseEvent, useContext, useEffect, useState} from 'react';
import {Global} from '../pages/_app';
import openZeroSquare from '../utils/zeroSquare';

interface IGameProps {
  game: undefined | any[][];
  r: number;
  c: number;
}

const Game = ({game, r, c}: IGameProps): JSX.Element => {
  const {start, setStart} = useContext(Global);
  const [open, setOpen] = useState<boolean[][]>(
    new Array(r).fill(false).map(() => new Array(c).fill(false))
  );

  const [flag, setFlag] = useState<boolean[][]>(
    new Array(r).fill(false).map(() => new Array(c).fill(false))
  );

  useEffect(() => {
    if (!game) return;
    const newopen = new Array(r)
      .fill(false)
      .map(() => new Array(c).fill(false));
    setOpen(newopen);

    const newFlag = new Array(r)
      .fill(false)
      .map(() => new Array(c).fill(false));
    setFlag(newFlag);
  }, [game]);

  const clickSquare = (e: MouseEvent<HTMLLIElement>) => {
    if (!game) return;

    if (!start && setStart) {
      setStart(true);
    }

    const x = Number(e.currentTarget.attributes[1].value);
    const y = Number(e.currentTarget.attributes[0].value);

    if (flag[x][y]) {
      return;
    }

    const newopen = [...open];
    if (game[x][y] === 0) {
      const opened = openZeroSquare(x, y, game, newopen, flag);
      setOpen(opened);
    } else {
      newopen[x][y] = true;
      setOpen(newopen);
    }
  };

  const flagSquare = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const newFlag = [...flag];

    const x = Number(e.currentTarget.attributes[1].value);
    const y = Number(e.currentTarget.attributes[0].value);

    if (open[x][y]) {
      return;
    }

    newFlag[x][y] = !newFlag[x][y];

    setFlag(newFlag);
  };

  const generteRow = (value: any[], index: number): JSX.Element[] => {
    return value.map((v, i) => {
      const className = classNames('minebox', {
        [`open value-${game![i][index]}`]: open[i][index],
        close: !open[i][index],
        flag: !open[i][index] && flag[i][index],
      });

      return (
        <li
          key={`row${i}`}
          data-y={index}
          data-x={i}
          onClick={clickSquare}
          onContextMenu={flagSquare}
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
