import { MouseEvent, useEffect, useState, useRef } from 'react';

interface IGameProps {
  game: undefined | any[][];
}

const Game = ({ game }: IGameProps): JSX.Element => {
  // const [gameMap, setGameMap] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!game) return;
    // console.log('asdfadfasd');
    // const newMap = generateMap(game);
    // setGameMap(newMap);
    const list = mineRef.current?.children;
    console.log(list[0]);
  }, [game]);

  const clickSquare = (e: MouseEvent<HTMLLIElement>) => {
    if (!game) return;
    const x = Number(e.currentTarget.attributes[1].value);
    const y = Number(e.currentTarget.attributes[0].value);
    e.currentTarget.innerHTML = game[x][y];
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
          }}
          data-y={index}
          data-x={i}
          onClick={clickSquare}
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

  const mineRef = useRef<HTMLUListElement | null>(null);

  if (!game) return <></>;
  return (
    <div>
      <ul
        style={{
          display: 'flex',
          width: '10px',
          justifyContent: 'space-between',
        }}
        ref={mineRef}
      >
        {generateMap(game)}
      </ul>
    </div>
  );
};

export default Game;
