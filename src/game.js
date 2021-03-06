const Player = require('./player');
const Obstacle = require('./obstacle');
const Coin = require('./coin');
const StartLines = require('./start_lines');
const Shield = require('./shield');

class Game{
  constructor(background){
    this.background = background;

    this.obstacles = [];
    this.player = this.addPlayer();
    this.coins = [];
    this.powerups = [];
    this.powerup = null;
    this.scroll = 0;
    this.scrollSpeed = 10;

    this.gameOver = false;
    this.coinCount = 0;
    // this.startlines = new StartLines({
    //   pos: [0, 0],
    //   vel: [10, 10],
    //   color: "#3befe8",
    //   maxWidth: Game.DIM_X
    // });
  }


  add(object){
    if (object instanceof Player){
      this.player = object;
    }else if(object instanceof Obstacle){
      this.obstacles.push(object);
    }else if(object instanceof Coin){
      this.coins.push(object);
    }else if(object instanceof Shield){
      this.powerups.push(object);
    }
  }

  allObjects(){
    return [].concat(this.obstacles, this.coins, this.powerups);
  }

  addPlayer(){
    const player = new Player({
      pos: [Game.DIM_X * 0.5, Game.DIM_Y * 0.9],
      vel: [10, 10],
      color: "#43b9e0",
      maxDist: Game.DIM_X
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
        this.scrollSpeed = 15;
      }else if (this.coinCount < 10){
        object.move(15);
      }else {
        object.move(20);
        this.scrollSpeed = 20;
      }
    });
  }

  createObstacles(){
    for(let i = 0; i < Math.ceil(Math.random() * 3); i++){
      let obstacle = new Obstacle({
        pos: [
          Math.random() * (Game.DIM_X - 40),
          0 - Math.random() * Game.DIM_Y
        ],
        vel: [10, 10],
        color: "#ef0b0b"
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

  createPowerup(){
    let shield = new Shield({
      pos: [Math.random() * (Game.DIM_X - 40),
      0 - Math.random() * Game.DIM_Y
      ],
      color: "#fff"
    });
    this.add(shield);
  }

  generateItems(){
    if(Math.random() > 0.988){
      this.createObstacles();
    }

    if(Math.random() > 0.985){
      this.createCoin();
    }

    if(Math.random() > 0.999){
      this.createPowerup();
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
      let item = allObjects[i];
      if(!(
        ((player.pos[1] + player.height) < (item.pos[1])) ||
        (player.pos[1] > (item.pos[1] + item.height)) ||
        ((player.pos[0] + player.width) < item.pos[0]) ||
        (player.pos[0] > (item.pos[0] + item.width))
      )){
        this.isCollidedWith(player, item);
      }
    }
  }

  isCollidedWith(player, object){
    if (object instanceof Obstacle) {
      if(this.powerup === 'shield'){
        this.obstacles.splice(this.obstacles.indexOf(object), 1);
        this.powerup = null;
      }else{
        this.gameOver = true;
      }
    } else if (object instanceof Coin) {
      this.coinCount += 1;
      this.removeCoin(object);
    }else if(object instanceof Shield){
      this.removePowerup(object);
      this.powerup = 'shield';
    }
  }

  removeCoin(object){
    this.coins.splice(this.coins.indexOf(object), 1);
  }  

  removePowerup(object){
    this.powerups.splice(this.powerups.indexOf(object), 1);
  }

  draw(ctx){
    ctx.clearRect(0,0, Game.DIM_X, Game.DIM_Y);
    
    ctx.drawImage(this.background, 0, this.scroll, Game.DIM_X, Game.DIM_Y);
    ctx.drawImage(this.background, 0, (-Game.DIM_Y) + this.scroll, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(el => {
      el.draw(ctx);
    });

    // this.startlines.draw(ctx, this.background);
    this.player.draw(ctx, this.powerup);
    let score = document.getElementsByClassName('score')[0];
    score.innerHTML = `Coins: ${this.coinCount}`;

    this.scroll += this.scrollSpeed;
    if (this.scroll > Game.DIM_Y){
      this.scroll = 0;
    }
    this.gameOverLogic();
  }

  gameOverLogic(){
    let gameover = document.getElementById('gameover');
    if(this.gameOver){
      gameover.innerHTML = `Game Over! You got ${this.coinCount} coins! Press "enter" to play again`;
      gameover.classList.add('gameover-text');
    }else{
      gameover.classList.remove('gameover-text');
    }
  }
}

Game.BG_COLOR = "#43b9e0";
Game.DIM_X = screen.width * 0.5;
Game.DIM_Y = screen.height * 0.8;
Game.FPS = 100;


module.exports = Game;