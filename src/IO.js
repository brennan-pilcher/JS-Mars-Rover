import fs from 'fs';

const IO = {
  getRawInput: (filename) => {
    return fs.promises.readFile(filename, 'utf8', (err, data) => {
      return data;
    });
  },
  parseCoordinatesFromInput: (input) => {
    if ((/^\d+\s\d+\s[NESW]\n[LRM]+$/).test(input)) {
      const coordinates = input.match(/\d+/g);
      return { x: parseInt(coordinates[0]), y: parseInt(coordinates[1]) };
    }
    else {
      throw Error(`Unable to parse input: "${input}"`);
    }
  }
}

export default IO;