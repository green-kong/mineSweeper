const checkOpenCnt = (open: boolean[][]): number => {
  let count: number = 0;

  for (let i = 0; i < open.length; i++) {
    for (let j = 0; j < open[i].length; j++) {
      if (open[i][j] === true) {
        count += 1;
      }
    }
  }

  return count;
};

export default checkOpenCnt;
