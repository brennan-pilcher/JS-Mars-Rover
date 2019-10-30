import IO from '../src/IO';

describe('IO module', () => {

  it('should import the contents of a file', async () => {
    const testData = await IO.getRawInput("__tests__/test_data/inputFile.txt");

    expect(testData).toEqual('this is some test data');
  });

});