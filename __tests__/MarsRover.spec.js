import MarsRover from '../src/MarsRover';

describe('Mars Rover', () => {
  let rover;

  beforeEach(() => {
    rover = new MarsRover(1,1);
  });

  it('should say hello when booting up', () => {
    expect(rover.bootUp()).toEqual('Beep Boop, I am the Mars Rover!');
  });

  it('should have an initial position', () => {
    expect(rover.getPosition()).toEqual([1,1]);
  })

});