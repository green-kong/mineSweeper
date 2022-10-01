import { MouseEvent, useEffect, useState, useRef } from 'react';

interface IGameProps {
  game: undefined | any[][];
  r: number;
  c: number;
}

const Game = ({ game, r, c }: IGameProps): JSX.Element => {
  const [check, setCheck] = useState<boolean[][]>(
    new Array(r).fill(false).map(() => new Array(c).fill(false))
  );

  useEffect(() => {
    if (!game) return;
    const newCheck = new Array(r)
      .fill(false)
      .map(() => new Array(c).fill(false));
    setCheck(newCheck);
  }, [game]);

  const clickSquare = (e: MouseEvent<HTMLLIElement>) => {
    if (!game) return;

    const x = Number(e.currentTarget.attributes[1].value);
    const y = Number(e.currentTarget.attributes[0].value);

    const newCheck = [...check];
    newCheck[x][y] = true;
    setCheck(newCheck);
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
            backgroundColor:
              check.length !== 0 && check[i][index] ? 'red' : 'blue',
          }}
          data-y={index}
          data-x={i}
          onClick={clickSquare}
          className={check.length !== 0 && check[i][index] ? 'open' : 'close'}
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
