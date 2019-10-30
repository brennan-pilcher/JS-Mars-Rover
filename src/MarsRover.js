class MarsRover {

  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  bootUp () {
    return "Beep Boop, I am the Mars Rover!";
  }

  getPosition () {
    return [this.x, this.y];
  }

};

export default MarsRover;