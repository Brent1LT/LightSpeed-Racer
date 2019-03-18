class Powerup {
  constructor(options) {
    this.color = options.color;
    this.pos = options.pos;
  }

  move(x) {
    if (this.pos > 900) this.remove();
    this.pos[1] += x;
  }
}

module.exports = Powerup;