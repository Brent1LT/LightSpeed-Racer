const MovingObject = require('./moving_object');

class Obstacle extends MovingObject {
  constructor(options){
    super(options);
    this.height = 28;
    this.width = 32;
  }

  move(x){
    if (this.pos > 900) this.remove();
    this.pos[1] += x;
  }

  draw(ctx){
    ctx.fillStyle = this.color;
    for (let i = 0; i < 8; i++) {
      ctx.fillRect(this.pos[0] + i * 5, this.pos[1], 4, 4);
    }

    for (let i = 0; i < 7; i++) {
      ctx.fillRect(this.pos[0], this.pos[1] + i * 5, 4, 4);
    }

    for (let i = 0; i < 8; i++) {
      ctx.fillRect(this.pos[0] + i * 5, this.pos[1] + 30, 4, 4);
    }

    for (let i = 0; i < 7; i++) {
      ctx.fillRect(this.pos[0] + 40, this.pos[1] + i * 5, 4, 4);
    }
    
  }
}

module.exports = Obstacle;