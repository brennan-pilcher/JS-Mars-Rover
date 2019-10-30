import MarsRover from '../src/MarsRover';

describe('Mars Rover', () => {

  it('should say hello when booting up', () => {
    expect(MarsRover.bootUp()).toEqual('Beep Boop, I am the Mars Rover!');
  });

});