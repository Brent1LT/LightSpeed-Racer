import _ from 'lodash';
const Game = require('./game');
const GameView = require('./game_view');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;
  const ctx = canvas.getContext('2d');
  
  let background = new Image();
  background.src =
    "https://github.com/Brent1LT/LightSpeed-Racer/blob/master/app/assets/other-road-background.jpg?raw=true";

  let audio = document.getElementById('audio');
  let mute = document.getElementById('mute');
  let muted = false;
  

  const game = new Game(background);
  let lightspeed = new GameView(game, ctx, audio);
  
  background.onload = function() {
    // game.draw(ctx);
    lightspeed.start();
    // debugger
  };
  // debugger

  // lightspeed.start();

  mute.addEventListener('click', () => {
    mute.classList.toggle('mute');
    if (muted) {
      lightspeed.muted = false;
      muted = false;
      audio.play();
    } else {
      lightspeed.muted = true;
      muted = true;
      audio.pause();
    }
  });


  window.addEventListener("keypress", (e) => {
    if (e.charCode === 13) {
      lightspeed.pause(audio);
      }
  });
      
});


