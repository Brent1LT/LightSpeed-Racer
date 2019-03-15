const Player = require('./player');
const Obstacle = require('./obstacle');

class Game{
  constructor(){
    this.obstacles = [];
    this.player = null;
    this.coins = [];

    this.coinCount = 15;
  }


  add(object){
    if (object instanceof Player){
      this.player = object;
    }else if(object instanceof Obstacle){
      this.obstacles.push(object);
      console.log(this.obstacles);
    }
  }

  allObjects(){
    return [].concat(this.obstacles, this.coins);
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
    this.allObjects().forEach(object => {
      if(this.coinCount < 5){
        object.move(5);
      } else if (this.coinCount < 10){
        object.move(9);
      }else{
        object.move(12);
      }

    });
  }

  createObstacles(){
    for(let i = 0; i < Math.ceil(Math.random() * 3); i++){
      let obstacle = new Obstacle({
        pos: [Math.random() * (Game.DIM_X - 40), (0 - Math.random() * Game.DIM_Y)],
        vel: [10, 10],
        color: "#565151"
      });
      this.add(obstacle);
    }
  }

  generateObstacles(){
    if(Math.random() > 0.995){
      this.createObstacles();
    }
  }

  step(){
    this.moveObjects();
    //this.checkCollisions();
  }

  draw(ctx){
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.obstacles.forEach(el => {
      el.draw(ctx)
    })
    this.player.draw(ctx);
  }
}

Game.BG_COLOR = "#43b9e0";
Game.DIM_X = 500;
Game.DIM_Y = 900;
Game.FPS = 100;


module.exports = Game;