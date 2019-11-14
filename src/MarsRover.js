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

  executeCommand (command) {
    if (command == 'W') {
      if (this.direction == 'N') this.y += 1;
      else if (this.direction == 'E') this.x += 1;
      else if (this.direction == 'S') this.y -= 1;
      else if (this.direction == 'W') this.x -= 1;
    }
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