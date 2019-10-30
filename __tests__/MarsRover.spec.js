import MarsRover from '../src/MarsRover';

describe('Mars Rover', () => {
  let rover;

  beforeEach(() => {
    rover = new MarsRover('LMRMLLM', 'N', 1, 1);
  });

  it('should say hello when booting up', () => {
    expect(rover.bootUp()).toEqual('Beep Boop, I am the Mars Rover!');
  });

  it('should have an initial position', () => {
    expect(rover.getPosition()).toEqual([1,1]);
  });

  it('should have an initial direction', () => {
    expect(rover.getDirection()).toEqual('N');
  });

  it('should have an initial list of commands', () => {
    expect(rover.getCommands()).toEqual('LMRMLLM');
  });

});