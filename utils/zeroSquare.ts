const openZeroSquare = (
  r: number,
  c: number,
  game: any[][],
  check: boolean[][],
  flag: boolean[][]
): boolean[][] => {
  const newCheck = [...check];

  const checkZeroSquare = (r: number, c: number) => {
    if (game[r][c] !== 0) {
      return;
    }

    newCheck[r][c] = true;

    const dirRs = [-1, 0, 1, 0];
    const dirCs = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
      const nr = r + dirRs[i];
      const nc = c + dirCs[i];

      if (
        nr >= 0 &&
        nc >= 0 &&
        nr < 9 &&
        nc < 9 &&
        !newCheck[nr][nc] &&
        !flag[nr][nc]
      ) {
        newCheck[nr][nc] = true;
        checkZeroSquare(nr, nc);
      }
    }
  };

  checkZeroSquare(r, c);
  return newCheck;
};

export default openZeroSquare;
