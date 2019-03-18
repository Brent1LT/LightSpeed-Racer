const Powerup = require('./powerup');

class Shield extends Powerup{
  constructor(options){
    super(options);
    this.tick = 0;

    this.height = 32;
    this.width = 36;
  }

  draw(ctx) {
    if(this.tick > 40) this.tick = 0;

    if(this.tick < 20 ){
      ctx.fillStyle = "#0fe80b";
    }else if(this.tick > 20){
      ctx.fillStyle = this.color;
    }

    ctx.fillRect(this.pos[0] + 20, this.pos[1]+ 15, 3,3);
    ctx.fillRect(this.pos[0] + 17, this.pos[1]+ 12, 3,3);
    ctx.fillRect(this.pos[0] + 14, this.pos[1]+ 12, 3,3);
    ctx.fillRect(this.pos[0] + 12, this.pos[1]+ 15, 3,3);
    ctx.fillRect(this.pos[0] + 12, this.pos[1]+ 18, 3,3);
    ctx.fillRect(this.pos[0] + 15, this.pos[1]+ 21, 3,3);
    ctx.fillRect(this.pos[0] + 18, this.pos[1]+ 21, 3,3);
    ctx.fillRect(this.pos[0] + 20, this.pos[1]+ 24, 3,3);
    ctx.fillRect(this.pos[0] + 20, this.pos[1]+ 27, 3,3);
    ctx.fillRect(this.pos[0] + 17, this.pos[1]+ 30, 3,3);
    ctx.fillRect(this.pos[0] + 14, this.pos[1]+ 30, 3,3);

    this.tick += 1;
    ctx.fillStyle = this.color;
    for(let i = 0; i < 2; i++){
      ctx.fillRect(this.pos[0], this.pos[1], 4, 4);
      ctx.fillRect(this.pos[0] + 4 + i*16, this.pos[1] + 5, 4, 4);
      ctx.fillRect(this.pos[0] + 8 + i*16, this.pos[1] + 8, 4, 4);
      ctx.fillRect(this.pos[0] + 12 + i*16, this.pos[1] + 5, 4, 4);
      ctx.fillRect(this.pos[0] + 16 + i*16, this.pos[1], 4, 4);
    }

    for(let i = 0; i < 2; i++){
      ctx.fillRect(this.pos[0] + i * 32, this.pos[1] + 4, 4, 4);
      ctx.fillRect(this.pos[0] + i * 32, this.pos[1] + 8, 4, 4);
      ctx.fillRect(this.pos[0] + i * 32, this.pos[1] + 12, 4, 4);
      ctx.fillRect(this.pos[0] + i * 32, this.pos[1] + 16, 4, 4);
      ctx.fillRect(this.pos[0] + i * 32, this.pos[1] + 20, 4, 4);
    }
    
    ctx.fillRect(this.pos[0] + 4, this.pos[1] + 24, 4,4);
    ctx.fillRect(this.pos[0] + 8, this.pos[1] + 28, 4,4);
    ctx.fillRect(this.pos[0] + 12, this.pos[1] + 32, 4,4);
    ctx.fillRect(this.pos[0] + 28, this.pos[1] + 24, 4,4);
    ctx.fillRect(this.pos[0] + 24, this.pos[1] + 28, 4,4);
    ctx.fillRect(this.pos[0] + 20, this.pos[1] + 32, 4,4);
    ctx.fillRect(this.pos[0] + 16, this.pos[1]+ 36, 4,4);
  }
}

module.exports = Shield;