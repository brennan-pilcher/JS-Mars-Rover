import IO from '../src/IO';

describe('IO module', () => {

  it('should import the contents of a file', async () => {
    const input = await IO.getRawInput("__tests__/test_data/inputFile.txt");

    expect(input).toEqual('1 2 N\nMLMRML');
  });

  it('should parse initial coordinates and direction from the input', () => {
    const parsedInput = IO.parseInitialStateFromInput('1 2 N\nMLMRML');

    expect(parsedInput).toEqual({ commands: 'MLMRML', direction: 'N', x: 1, y: 2 });
  });

  it('should throw an error when parsing if the input is invalid', () => {
    const invalidInput1 = (input) => {IO.parseInitialStateFromInput('1 2 X\nMLMRML')}
    const invalidInput2 = (input) => {IO.parseInitialStateFromInput('1 2 2\nMLMRML')}
    const invalidInput3 = (input) => {IO.parseInitialStateFromInput('1 2\nMLMRML')}
    const invalidInput4 = (input) => {IO.parseInitialStateFromInput('1 2 N\nWWWW')}

    expect(invalidInput1).toThrow(Error('Unable to parse input: "1 2 X\nMLMRML"'));
    expect(invalidInput2).toThrow(Error('Unable to parse input: "1 2 2\nMLMRML"'));
    expect(invalidInput3).toThrow(Error('Unable to parse input: "1 2\nMLMRML"'));
    expect(invalidInput4).toThrow(Error('Unable to parse input: "1 2 N\nWWWW"'));
  });

});