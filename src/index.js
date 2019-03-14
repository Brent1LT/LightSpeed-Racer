import _ from 'lodash';
const Player = require('./player');
const Obstacle = require('./obstacle');
const Game = require('./game');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;
  const ctx = canvas.getContext('2d');
  

  // const obstacle = new Obstacle({
  //   pos: [100, 100],
  //   vel: [10, 10],
  //   color: "#565151"
  // });
      
  const game = new Game();
  game.draw(ctx);
      

  // startLoop();
});

// function startLoop() {
//   update();
// }

// function update() {
//   requestAnimationFrame(update)
//   console.log("update");
// }

