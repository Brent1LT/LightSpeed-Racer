const MovingObject = require('./moving_object');

class Coin extends MovingObject{
  constructor(options){
    super(options);

    this.height = 30;
    this.width = 30;
  }

  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    for (let i = 0; i < 2; i++) {
      ctx.fillRect((this.pos[0] + 6 + i * 8), this.pos[1], 6, 6);
    }

    for (let i = 0; i < 2; i++) {
      ctx.fillRect(this.pos[0] + i * 20, this.pos[1] + 8, 6, 6);
    }

    for (let i = 0; i < 2; i++) {
      ctx.fillRect(this.pos[0] + i * 20, this.pos[1] + 16, 6, 6);
    }

    for (let i = 0; i < 3; i++) {
      ctx.fillRect(this.pos[0] + 12, this.pos[1] + 10 + i * 3, 3, 3);
    }

    for (let i = 0; i < 2; i++) {
      ctx.fillRect(this.pos[0] + 6 + i * 8, this.pos[1] + 24, 6, 6);
    }
  }
}

module.exports = Coin;