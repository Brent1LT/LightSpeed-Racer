import _ from 'lodash';
const Game = require('./game');
const GameView = require('./game_view');

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("game-canvas");
  canvas.width = Game.DIM_X;
  canvas.height = Game.DIM_Y;
  const ctx = canvas.getContext('2d');

  let audio = document.getElementById('audio');
  let mute = document.getElementById('mute');
  let muted = false;
  

  const game = new Game();
  let lightspeed = new GameView(game, ctx, audio);
  lightspeed.start();

  mute.addEventListener('click', () => {
    mute.classList.toggle('mute');
    if (muted) {
      lightspeed.muted = false;
      muted = false;
      audio.play();
      console.log(muted, lightspeed.muted);
    } else {
      lightspeed.muted = true;
      muted = true;
      audio.pause();
      console.log(muted, lightspeed.muted);
    }
  });


  window.addEventListener("keypress", (e) => {
    if (e.charCode === 13) {
      lightspeed.pause(audio);
      console.log('paused');
      console.log(lightspeed);

      }
  });
      
});


