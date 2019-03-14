class GameView {
  constructor(game, ctx){
    this.game = game;
    this.ctx = ctx;
    this.player = this.game.addPlayer();
  }
}

module.exports = GameView;