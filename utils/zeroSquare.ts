interface numbers {
  r: number;
  c: number;
  x: number;
  y: number;
}

const openZeroSquare = (
  {r, c, x, y}: numbers,
  game: any[][],
  check: boolean[][],
  flag: boolean[][]
): boolean[][] => {
  const newCheck = [...check];

  const checkZeroSquare = (x: number, y: number, r: number, c: number) => {
    if (game[x][y] !== 0) {
      return;
    }

    newCheck[x][y] = true;

    const dirRs = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dirCs = [0, 1, 1, 1, 0, -1, -1, -1];

    for (let i = 0; i < 9; i++) {
      const nr = x + dirRs[i];
      const nc = y + dirCs[i];

      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < r &&
        nc < c &&
        !newCheck[nr][nc] &&
        !flag[nr][nc]
      ) {
        newCheck[nr][nc] = true;
        checkZeroSquare(nr, nc, r, c);
      }
    }
  };

  checkZeroSquare(x, y, r, c);
  return newCheck;
};

export default openZeroSquare;
