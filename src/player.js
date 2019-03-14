const MovingObject = require('./moving_object');

class Player extends MovingObject {
  constructor(options) {
    super(options);
  }

  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    for(let i = 0; i < 2; i++){
      ctx.fillRect((this.pos[0] + 10 + i * 10), this.pos[1], 8, 8);
    }
    // ctx.fillRect(40, 25, 8, 8);
    // ctx.fillRect(50, 25, 8, 8);

    for(let i = 0; i < 4; i++){
      ctx.fillRect(this.pos[0] + i * 10, this.pos[1] + 10, 8, 8);
    }

    // ctx.fillRect(30, 35, 8, 8);
    // ctx.fillRect(40, 35, 8, 8);
    // ctx.fillRect(50, 35, 8, 8);
    // ctx.fillRect(60, 35, 8, 8);

    for (let i = 0; i < 2; i++) {
      ctx.fillRect((this.pos[0] + 10 + i * 10), this.pos[1] + 20, 8, 8);
    }

    // ctx.fillRect(40, 45, 8, 8);
    // ctx.fillRect(50, 45, 8, 8);

    for (let i = 0; i < 4; i++) {
      ctx.fillRect(this.pos[0] + i * 10, this.pos[1] + 30, 8, 8);
    }

    // ctx.fillRect(30, 55, 8, 8);
    // ctx.fillRect(40, 55, 8, 8);
    // ctx.fillRect(50, 55, 8, 8);
    // ctx.fillRect(60, 55, 8, 8);
  }

}

module.exports = Player;