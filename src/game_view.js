class GameView {
  constructor(game, ctx){
    this.game = game;
    this.ctx = ctx;
    this.player = this.game.addPlayer();
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
  }

  animate(time){
    const timeDelta = time - this.lastTime;
    this.game.generateObstacles();
    this.game.step();
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}


GameView.MOVES = {
  a: [-30, 0],
  d: [30, 0]
};

module.exports = GameView;