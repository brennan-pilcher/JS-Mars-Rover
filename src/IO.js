import fs from 'fs';

const getRawInput = (filename) => {
  return fs.promises.readFile(filename, 'utf8', (err, data) => {
    return data;
  });
}

const parseGrid = (input) => {
  return {};
}

const parseInput = (input) => {
  if ((/^\d+\s\d+\n(\d+\s\d+\s[NESW]\n[LRM]+\n?)+$/).test(input)) {
    const grid = input.match(/\d+\s\d+/)[0].match(/\d+/g);
    const width = parseInt(grid[0]);
    const height = parseInt(grid[1]);
    const rovers = input.match(/\d+\s\d+\s[NESW]\n[LRM]+\n?/g).map(rover => parseRoverInitialState(rover));
    
    return {
      grid: {
        height,
        width
      },
      rovers
    }
  }
  else {
    throw Error(`Unable to parse input: "${input}"`);
  }
}

const parseRoverInitialState = (input) => {
  const coordinates = input.match(/\d+/g);
  const direction = input.match(/[NESW]/g);
  const commands = input.match(/[LRM]+/g);
  return {
    commands: commands[0],
    direction: direction[0],
    x: parseInt(coordinates[0]),
    y: parseInt(coordinates[1])
  };
}

const IO = {
  getRawInput,
  parseGrid,
  parseInput,
  parseRoverInitialState
}

export default IO;