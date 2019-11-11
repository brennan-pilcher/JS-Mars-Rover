const grid = {
  grid: {
    height: 6,
    width: 6
  }
};

const firstRover = {
  commands: 'MLRMRMR',
  direction: 'N',
  x: 1,
  y: 3
};

const secondRover = {
  commands: 'MRMRMR',
  direction: 'E',
  x: 3,
  y: 4
};

const thirdRover = {
  commands: 'MRLLRLM',
  direction: 'W',
  x: 2,
  y: 3
};

export const output = {
  ...grid,
  rovers: [
    firstRover,
    secondRover,
    thirdRover
  ]
};