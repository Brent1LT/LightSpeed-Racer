const Player = require('./player');
const Obstacle = require('./obstacle');
const Coin = require('./coin');
const StartLines = require('./start_lines');

class Game{
  constructor(){
    this.obstacles = [];
    this.player = this.addPlayer();
    this.coins = [];

    this.gameOver = false;
    this.coinCount = 0;
    this.startlines = new StartLines({
      pos: [0, 0],
      vel: [10, 10],
      color: "#3befe8"
    });
  }


  add(object){
    if (object instanceof Player){
      this.player = object;
    }else if(object instanceof Obstacle){
      this.obstacles.push(object);
    }else if(object instanceof Coin){
      this.coins.push(object);
    }
  }

  allObjects(){
    return [].concat(this.obstacles, this.coins);
  }

  addPlayer(){
    const player = new Player({
      pos: [250, 800],
      vel: [10, 10],
      color: "rgb(0, 0, 0)"
    });
    this.add(player);
    return player;
  }

  moveObjects(){
    this.allObjects().forEach(object => {
      if(this.coinCount < 3){
        object.move(8);
      } else if (this.coinCount < 7){
        object.move(12);
      }else if (this.coinCount < 10){
        object.move(15);
      }else {
        object.move(20);
      }
    });
  }

  createObstacles(){
    for(let i = 0; i < Math.ceil(Math.random() * 4); i++){
      let obstacle = new Obstacle({
        pos: [Math.random() * (Game.DIM_X - 40), (0 - Math.random() * Game.DIM_Y)],
        vel: [10, 10],
        color: "#565151"
      });
      this.add(obstacle);
    }
  }

  createCoin(){
    let coin = new Coin({
      pos: [Math.random() * (Game.DIM_X - 40),
        0 - Math.random() * Game.DIM_Y
      ],
      vel: [10, 10],
      color: "#f7e307"
    });
    this.add(coin);
  }

  generateItems(){
    if(Math.random() > 0.993){
      this.createObstacles();
    }

    if(Math.random() > 0.995){
      this.createCoin();
    }
  }

  step(){
    this.moveObjects();
    this.checkCollisions();
  }

  checkCollisions(){
    const allObjects = this.allObjects();
    for(let i = 0; i < allObjects.length; i++){
      let player = this.player;
      let b = allObjects[i];
      if(!(
        ((player.pos[1] + player.height) < (b.pos[1])) ||
        (player.pos[1] > (b.pos[1] + b.height)) ||
        ((player.pos[0] + player.width) < b.pos[0]) ||
        (player.pos[0] > (b.pos[0] + b.width))
      )){
        this.isCollidedWith(player, b);
      }
    }
  }

  isCollidedWith(player, object){
    if (object instanceof Obstacle) {
      this.gameOver = true;
    } else if (object instanceof Coin) {
      this.coinCount += 1;
      this.removeCoin(object);
      console.log(this.coinCount);
    }
  }

  removeCoin(object){
    this.coins.splice(this.coins.indexOf(object), 1);
  }  

  draw(ctx){
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(el => {
      el.draw(ctx);
    });

    this.startlines.draw(ctx);
    this.player.draw(ctx);

    if(this.gameOver){
      this.gameOverLogic();
    }
  }

  gameOverLogic(){
    console.log('gameover');
  }
}

Game.BG_COLOR = "#43b9e0";
Game.DIM_X = 600;
Game.DIM_Y = 900;
Game.FPS = 100;


module.exports = Game;