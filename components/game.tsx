import {MouseEvent, useEffect, useState} from 'react';
import openZeroSquare from '../utils/zeroSquare';

interface IGameProps {
  game: undefined | any[][];
  r: number;
  c: number;
}

const Game = ({game, r, c}: IGameProps): JSX.Element => {
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
      return (
        <li
          key={`row${i}`}
          style={{
            width: '40px',
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px black solid',
            boxSizing: 'border-box',
            marginLeft: '-1px',
            marginBottom: '-1px',
            backgroundColor: flag[i][index]
              ? 'teal'
              : open[i][index]
              ? 'red'
              : 'blue',
          }}
          data-y={index}
          data-x={i}
          onClick={clickSquare}
          onContextMenu={flagSquare}
          className={
            game && open.length !== 0 && open[i][index]
              ? `open value-${game[i][index]}`
              : `close ${flag[i][index] ? 'flag' : ''}`
          }
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
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          width: '10px',
          justifyContent: 'space-between',
        }}
      >
        {generateMap(game)}
      </ul>
    </div>
  );
};

export default Game;
