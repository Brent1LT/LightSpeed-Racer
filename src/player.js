const MovingObject = require('./moving_object');


class Player extends MovingObject {
  constructor(options) {
    super(options);

    this.height = 32;
    this.width = 40;
    this.tick = 0;
  }

  power(move){
    if((this.pos[0] + move[0] < 0) || (this.pos[0] + move[0] > 560)) return null;
    this.pos[0] += move[0];
    this.pos[1] += move[1];
  }


  draw(ctx){

    //wheels
    if(this.tick > 5){
      ctx.fillStyle = "#f20cdf";
      this.tick = 0;
    }else{
      ctx.fillStyle = this.color;
    }
    //front wheels
    ctx.fillRect(this.pos[0] + 30, this.pos[1] + 10, 8, 8);
    ctx.fillRect(this.pos[0], this.pos[1] + 10, 8, 8);
        
    //rear wheels
    ctx.fillRect(this.pos[0], this.pos[1] + 30, 8, 8);
    ctx.fillRect(this.pos[0] + 30, this.pos[1] + 30, 8, 8);

    //car body
    ctx.fillStyle = this.color;
    this.tick += 1;
    ctx.beginPath();

    for(let i = 0; i < 2; i++){
      ctx.fillRect((this.pos[0] + 10 + i * 10), this.pos[1], 8, 8);
    }


    for(let i = 1; i < 3; i++){
      ctx.fillRect(this.pos[0] + i * 10, this.pos[1] + 10, 8, 8);
    }


    for (let i = 0; i < 2; i++) {
      ctx.fillRect((this.pos[0] + 10 + i * 10), this.pos[1] + 20, 8, 8);
    }


    for (let i = 1; i < 3; i++) {
      ctx.fillRect(this.pos[0] + i * 10, this.pos[1] + 30, 8, 8);
    }

  }

}

module.exports = Player;