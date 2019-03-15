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

  let audio = document.getElementById('audio');
  let mute = document.getElementById('mute');
  let muted = false;
  
  
  mute.addEventListener('click', () => {
    if(muted){
      audio.play();
      muted = false;
    }else{
      audio.pause();
      muted = true;
    }
  });

  const game = new Game();
  let lightspeed = new GameView(game, ctx);
  lightspeed.start();


  window.addEventListener("keypress", (e) => {
    if (e.charCode === 13) {
      console.log(lightspeed)
      lightspeed.pause(audio);
      console.log('paused');

      }
  });
      
});


