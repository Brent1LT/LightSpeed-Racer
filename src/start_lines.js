const MovingObject = require('./moving_object');

class StartLines extends MovingObject{
  constructor(options){
    super(options);

    this.tick = 0;
  }

  drawLine(ctx, pos){
    // if(this.tick < 50){
    //   ctx.strokeStyle = '#fff';
    // }else if (this.tick < 70){
    //   ctx.strokeStyle = "#3bef8f";
    // }else if(this.tick > 70){
    //   this.tick = 31;
    // }
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 0.3;
    ctx.beginPath();
    ctx.moveTo(pos, 0);
    if (this.tick > 30) {
      ctx.lineTo(pos, 900);
      ctx.stroke();
    } else {
      ctx.lineTo(pos, this.tick * 30);
      ctx.stroke();
    }
  }

  draw(ctx){
    this.drawLine(ctx, 100);
    this.drawLine(ctx, 200);
    this.drawLine(ctx, 300);
    this.drawLine(ctx, 400);
    this.drawLine(ctx, 500);
    this.tick += 1;
  }
}

module.exports = StartLines;