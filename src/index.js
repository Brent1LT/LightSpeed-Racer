import _ from 'lodash';
const Player = require('./player');
const Obstacle = require('./obstacle');
const Game = require('./game');
const GameView = require('./game_view');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;
  const ctx = canvas.getContext('2d');
  
      
  const game = new Game();
  new GameView(game, ctx).start();
      
  // startLoop();
});

// function startLoop() {
//   update();
// }

// function update() {
//   requestAnimationFrame(update)
//   console.log("update");
// }

