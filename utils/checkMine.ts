const checkMine = (
  game: any[][],
  open: boolean[][]
): false | [number, number][] => {
  const bombList: [number, number][] = [];

  for (let i = 0; i < open.length; i++) {
    for (let j = 0; j < open[i].length; j++) {
      if (open[i][j] && game[i][j] === 'mine') {
        bombList.push([i, j]);
      }
    }
  }

  if (bombList.length) {
    return bombList;
  }
  return false;
};

export default checkMine;
