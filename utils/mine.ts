const getRandomNum = (max: number): number => {
  return Math.floor(Math.random() * max);
};

const getMineCoordinate = (row: number, col: number, mine: number): any[][] => {
  const stack = [];
  while (stack.length < mine) {
    const nr = getRandomNum(row);
    const nc = getRandomNum(col);

    const newCo = [nr, nc];
    if (!stack.length) {
      stack.push(newCo);
    } else {
      let duplicated = false;

      for (const co of stack) {
        if (co[0] === nr && co[1] === nc) {
          duplicated = true;
          break;
        }
      }

      if (!duplicated) {
        stack.push(newCo);
      }
    }
  }

  return stack;
};

const getCount = (
  i: number,
  j: number,
  r: number,
  c: number,
  array: any[][]
) => {
  let cnt = 0;

  const dirRs = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dirCs = [0, 1, 1, 1, 0, -1, -1, -1];

  for (let k = 0; k < 8; k++) {
    const nr = i + dirRs[k];
    const nc = j + dirCs[k];

    if (nr >= 0 && nc >= 0 && nr < r && nc < c && array[nr][nc] === 'mine') {
      cnt += 1;
    }
  }

  return cnt;
};

function generateMine(r: number, c: number, mine: number): any[][] {
  const array = new Array(r).fill(0).map(() => new Array(c).fill(0));
  const mineCo = getMineCoordinate(r, c, mine);

  for (const co of mineCo) {
    array[co[0]][co[1]] = 'mine';
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (array[i][j] !== 'mine') {
        array[i][j] = getCount(i, j, r, c, array);
      }
    }
  }
  return array;
}

export default generateMine;
