import IO from '../src/IO';

describe('IO module', () => {

  it('should import the contents of a file', async () => {
    const input = await IO.getRawInput("__tests__/test_data/inputFile.txt");

    expect(input).toEqual('1 2 N\nMLMRML');
  });

  it('should parse initial coordinates from the input', () => {
    const parsedInput = IO.parseCoordinatesFromInput('1 2 N\nMLMRML');

    expect(parsedInput).toEqual({ x: 1, y: 2 });
  })

});