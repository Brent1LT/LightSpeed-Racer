class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.color = options.color;
  }


  move(x) {
    if (this.pos > 900) this.remove();
    this.pos[1] += x;
  }
}

module.exports = MovingObject;