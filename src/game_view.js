class GameView {
  constructor(game, ctx){
    this.game = game;
    this.ctx = ctx;
    this.player = this.game.addPlayer();

    this.paused = true;
    this.muted = false;
  }

  bindKeyHandlers(){
    const player = this.player;
    

    Object.keys(GameView.MOVES).forEach(k => {
      const move = GameView.MOVES[k];
      key(k, () => player.power(move));
    });
  }

  start(){
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
    // this.paused = false;
  }

  animate(time){
    this.game.generateItems();
    this.game.step();
    this.game.draw(this.ctx); 
    if(this.paused) return;
    this.id = requestAnimationFrame(this.animate.bind(this));
  }

  pause(audio){
    if(this.paused){
      this.paused = false;
      this.animate();
      if(!this.muted) audio.play();
    }else{
      this.paused = true;
      if(!this.muted) audio.pause();
    }
  }
}


GameView.MOVES = {
  a: [-50, 0],
  d: [50, 0]
};

module.exports = GameView;