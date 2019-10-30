class MarsRover {

  constructor (commands, direction, x, y) {
    this.commands = commands;
    this.direction = direction;
    this.x = x;
    this.y = y;
  }

  bootUp () {
    return "Beep Boop, I am the Mars Rover!";
  }

  getCommands () {
    return this.commands;
  }

  getDirection () {
    return this.direction;
  }

  getPosition () {
    return [this.x, this.y];
  }


};

export default MarsRover;