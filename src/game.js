const Player = require('./player');
const Obstacle = require('./obstacle');

class Game{
  constructor(){
    this.obstacles = [];
    this.player = null;
    this.coins = [];

  }


  add(object){
    if (object instanceof Player){
      this.player = object;
    }else if(object instanceof Obstacle){
      this.obstacles.push(object);
    }
  }

  addPlayer(){
    const player = new Player({
      pos: [225, 800],
      vel: [10, 10],
      color: "rgb(0, 0, 0)"
    });

    this.add(player);

    return player;
  }

  moveObjects(){

  }

  step(delta){
    this.moveObjects(delta);
    //this.checkCollisions();
  }

  draw(ctx){
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.player.draw(ctx);
  }
}

Game.BG_COLOR = "#43b9e0";
Game.DIM_X = 500;
Game.DIM_Y = 900;
Game.FPS = 60;


module.exports = Game;