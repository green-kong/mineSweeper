const openZeroSquare = (r, c) => {
  if (tmp[r][c] !== 0) {
    return;
  }

  check[r][c] = true;

  const dirRs = [-1, 0, 1, 0];
  const dirCs = [0, 1, 0, -1];

  for (let i = 0; i < 4; i++) {
    const nr = r + dirRs[i];
    const nc = c + dirCs[i];

    if (nr >= 0 && nc >= 0 && nr < 9 && nc < 9 && !check[nr][nc]) {
      openZeroSquare(nr, nc);
    }
  }
};
