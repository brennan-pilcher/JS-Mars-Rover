import IO from '../src/IO';
import { firstRoverInput, invalidInputs, rawInput } from './mock_data/inputs';
import { output } from './mock_data/outputs';

describe('IO module', () => {

  it('should import the contents of a file', async () => {
    const input = await IO.getRawInput("__tests__/mock_data/inputFile.txt");

    expect(input).toEqual(rawInput);
  });

  it('should take the input and parse it into a structured output', () => {
    const parsedInput = IO.parseInput(rawInput);

    expect(parsedInput).toEqual(output);
  });

  it('should parse initial coordinates and direction from the input', () => {
    const parsedInput = IO.parseRoverInitialState(firstRoverInput);

    expect(parsedInput).toEqual({ commands: 'MLRMRMR', direction: 'N', x: 1, y: 3 });
  });

  it('should throw an error when parsing if the input is invalid', () => {
    const invalidInput1 = (input) => {IO.parseInput(invalidInputs[0])}
    const invalidInput2 = (input) => {IO.parseInput(invalidInputs[1])}
    const invalidInput3 = (input) => {IO.parseInput(invalidInputs[2])}
    const invalidInput4 = (input) => {IO.parseInput(invalidInputs[3])}
    const invalidInput5 = (input) => {IO.parseInput(invalidInputs[4])}

    expect(invalidInput1).toThrow(Error('Unable to parse input: "5 5\n1 2 X\nMLMRML"'));
    expect(invalidInput2).toThrow(Error('Unable to parse input: "5 5\n1 2 2\nMLMRML"'));
    expect(invalidInput3).toThrow(Error('Unable to parse input: "5 5\n1 2\nMLMRML"'));
    expect(invalidInput4).toThrow(Error('Unable to parse input: "5 5\n1 2 N\nWWWW"'));
    expect(invalidInput5).toThrow(Error('Unable to parse input: "1 2 N\nMLMRM"'));
  });

});