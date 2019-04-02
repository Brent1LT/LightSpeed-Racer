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
    "https://github.com/Brent1LT/LightSpeed-Racer/blob/master/app/assets/road-background.jpg?raw=true";
  background.onload = function () {
    ctx.drawImage(background, 0, 0, Game.DIM_X, Game.DIM_Y);
  };

  let audio = document.getElementById('audio');
  let mute = document.getElementById('mute');
  let muted = false;
  

  const game = new Game(background);
  let lightspeed = new GameView(game, ctx, audio);
  lightspeed.start();

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


