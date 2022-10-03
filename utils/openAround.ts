import {useContext} from 'react';
import {Global} from '../pages/_app';
import openZeroSquare from './zeroSquare';

interface Maps {
  game: any[][];
  open: boolean[][];
  flag: boolean[][];
}

interface Numbers {
  r: number;
  c: number;
  x: number;
  y: number;
  value: number;
}

const aroundOpen = (maps: Maps, {r, c, x, y, value}: Numbers): boolean[][] => {
  let cnt: number = 0;
  let newOpen = [...maps.open];
  const stack = [];
  const dirRs = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dirCs = [0, 1, 1, 1, 0, -1, -1, -1];

  for (let i = 0; i < dirRs.length; i++) {
    const nr = x + dirRs[i];
    const nc = y + dirCs[i];

    if (nr >= 0 && nc >= 0 && nr < r && nc < c) {
      if (maps.flag[nr][nc]) {
        cnt += 1;
      } else if (!maps.open[nr][nc]) {
        stack.push([nr, nc]);
      }
    }
  }

  if (cnt === value) {
    stack.forEach((v) => {
      const [row, col] = v;
      if (maps.game[row][col] === 0) {
        const numbers = {x: row, y: col, r, c};
        newOpen = openZeroSquare(numbers, maps.game, newOpen, maps.flag);
      } else {
        newOpen[row][col] = true;
      }
    });
  }

  return newOpen;
};

export default aroundOpen;
