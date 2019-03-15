const MovingObject = require('./moving_object');
const Obstacle = require('./obstacle');

class Player extends MovingObject {
  constructor(options) {
    super(options);

    this.height = 32;
    this.width = 32;
  }

  power(move){
    if((this.pos[0] + move[0] < 0) || (this.pos[0] + move[0] > 465)) return null;
    this.pos[0] += move[0];
    this.pos[1] += move[1];
  }

  isCollidedWith(object){
    if(object instanceof Obstacle){
      console.log('collision');
    }
  }

  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();

    for(let i = 0; i < 2; i++){
      ctx.fillRect((this.pos[0] + 10 + i * 10), this.pos[1], 8, 8);
    }


    for(let i = 0; i < 4; i++){
      ctx.fillRect(this.pos[0] + i * 10, this.pos[1] + 10, 8, 8);
    }


    for (let i = 0; i < 2; i++) {
      ctx.fillRect((this.pos[0] + 10 + i * 10), this.pos[1] + 20, 8, 8);
    }


    for (let i = 0; i < 4; i++) {
      ctx.fillRect(this.pos[0] + i * 10, this.pos[1] + 30, 8, 8);
    }

  }

}

module.exports = Player;