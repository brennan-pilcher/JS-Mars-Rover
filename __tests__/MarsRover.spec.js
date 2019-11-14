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

  describe('should evaluate a walk command', () => {
    it('when facing north', () => {
      rover = new MarsRover('LMRMLLM', 'N', 1, 1);
      rover.executeCommand('W');
      
      expect(rover.getPosition()).toEqual([1,2]);
    });

    it('when facing south', () => {
      rover = new MarsRover('LMRMLLM', 'S', 1, 1);
      rover.executeCommand('W');
      
      expect(rover.getPosition()).toEqual([1,0]);
    });

    it('when facing west', () => {
      rover = new MarsRover('LMRMLLM', 'W', 1, 1);
      rover.executeCommand('W');
      
      expect(rover.getPosition()).toEqual([0,1]);
    });

    it('when facing east', () => {
      rover = new MarsRover('LMRMLLM', 'E', 1, 1);
      rover.executeCommand('W');
      
      expect(rover.getPosition()).toEqual([2,1]);
    });
  });

});