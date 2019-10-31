import IO from '../src/IO';
import { firstRoverInput, invalidInputs, rawInput } from '../test_data/inputs';

describe('IO module', () => {

  it('should import the contents of a file', async () => {
    const input = await IO.getRawInput("test_data/inputFile.txt");

    expect(input).toEqual(rawInput);
  });

  it('should parse initial coordinates and direction from the input', () => {
    const parsedInput = IO.parseInitialStateFromInput(firstRoverInput);

    expect(parsedInput).toEqual({ commands: 'MLRMRMR', direction: 'N', x: 1, y: 3 });
  });

  it('should throw an error when parsing if the input is invalid', () => {
    const invalidInput1 = (input) => {IO.parseInitialStateFromInput(invalidInputs[0])}
    const invalidInput2 = (input) => {IO.parseInitialStateFromInput(invalidInputs[1])}
    const invalidInput3 = (input) => {IO.parseInitialStateFromInput(invalidInputs[2])}
    const invalidInput4 = (input) => {IO.parseInitialStateFromInput(invalidInputs[3])}

    expect(invalidInput1).toThrow(Error('Unable to parse input: "1 2 X\nMLMRML"'));
    expect(invalidInput2).toThrow(Error('Unable to parse input: "1 2 2\nMLMRML"'));
    expect(invalidInput3).toThrow(Error('Unable to parse input: "1 2\nMLMRML"'));
    expect(invalidInput4).toThrow(Error('Unable to parse input: "1 2 N\nWWWW"'));
  });

});