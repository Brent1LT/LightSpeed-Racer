const Game = require('./game');

class GameView {
  constructor(game, ctx, audio){
    this.game = game;
    this.ctx = ctx;
    this.audio = audio;

    this.paused = true;
    this.muted = false;
  }

  bindKeyHandlers(){
    const player = this.game.player;
    

    Object.keys(GameView.MOVES).forEach(k => {
      const move = GameView.MOVES[k];
      key(k, () =>{
        if(this.paused){
          return null;
        }
        player.power(move);
      });
    });
  }

  start(){
    this.bindKeyHandlers();
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(){
    this.game.generateItems();
    this.game.step();
    this.game.draw(this.ctx); 
    if(this.paused) return;
    if(this.game.gameOver){
      this.audio.pause();
      return;
    } 
    this.id = requestAnimationFrame(this.animate.bind(this));
  }

  pause(){
    if(this.game.gameOver){
      this.game = new Game();
      if(!this.muted){
        this.audio.currentTime = 0;
        audio.play();
      } 
      this.start();
    }else if(this.paused){
      this.paused = false;
      this.animate();
      if(!this.muted) this.audio.play();
    }else{
      this.paused = true;
      if(!this.muted) this.audio.pause();
    }
  }
}


GameView.MOVES = {
  a: [-55, 0],
  d: [55, 0]
};

module.exports = GameView;