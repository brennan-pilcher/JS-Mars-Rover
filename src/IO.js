import fs from 'fs';

const IO = {
  getRawInput: (filename) => {
    return fs.promises.readFile(filename, 'utf8', (err, data) => {
      return data;
    });
  }
}

export default IO;