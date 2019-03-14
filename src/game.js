const Player = require('./player');
const Obstacle = require('./obstacle');

class Game{
  constructor(){
    this.obstacles = [];
    this.player = [];
    this.coins = [];

    this.addplayer();
  }


  add(object){
    if (object instanceof Player){
      this.player.push(object);
    }else if(object instanceof Obstacle){
      this.obstacles.push(object);
    }
  }

  addplayer(){
    const player = new Player({
      pos: [225, 800],
      vel: [10, 10],
      color: "rgb(0, 0, 0)"
    });

    this.add(player);
  }

  draw(ctx){
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(500, 200, Game.DIM_X, Game.DIM_Y);
    this.player[0].draw(ctx);
  }
}

Game.BG_COLOR = "#43b9e0";
Game.DIM_X = 500;
Game.DIM_Y = 900;
Game.FPS = 30;


module.exports = Game;