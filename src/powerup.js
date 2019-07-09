const MovingObject = require('./moving_object');
class Powerup extends MovingObject {
  constructor(options) {
    super(options);
    this.color = options.color;
    this.pos = options.pos;
  }
}

module.exports = Powerup;