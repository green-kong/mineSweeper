const checkMine = (game: any[][], open: boolean[][]): boolean => {
  for (let i = 0; i < open.length; i++) {
    for (let j = 0; j < open[i].length; j++) {
      if (open[i][j] && game[i][j] === 'mine') {
        return true;
      }
    }
  }
  return false;
};

export default checkMine;
