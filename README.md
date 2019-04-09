# Lightspeed Racer

[Live Site](https://brent1lt.github.io/LightSpeed-Racer/)

An easy yet fast-paced game. The goal of Lightspeed Racer is to get the highest score possible by collecting coins and 
avoiding obstacles. You can also collect power-ups to help survive for longer.

LightSpeed Racer uses Canvas for creating the game space, JavaScript to handle game mechanics, and CSS for appropiate styling.

## Technologies
* *Vanilla JavaScript* -- for game logic.
* *HTML5 / CSS3* -- for appropiate styling and game audio.
* *Github pages* -- to host the game.

## Functionality
* Players can move the car avatar by using the "a" and "d" keys.
* Players can pause/restart the game by pressing the "enter" key.
* Players can collect power-ups that will enhance game experience.
* Obstacles, coins, and power-ups will move toward the player.
* The game will end if the player is hit with an obstacle and doesn't have a shield power-up.

## Obstacle Detection
Establishing a collision hit box enables the game to calculate hit dectection at every frame
to determine a game-over if collided with an obstacle or score-upating if collection a coin.

![Obstacle Dectection](https://github.com/Brent1LT/LightSpeed-Racer/blob/master/app/assets/obstacle_detection.png)
```
//game.js

checkCollisions(){
    const allObjects = this.allObjects();
    for(let i = 0; i < allObjects.length; i++){
      let player = this.player;
      let item = allObjects[i];
      if(!(
        ((player.pos[1] + player.height) < (item.pos[1])) ||
        (player.pos[1] > (item.pos[1] + item.height)) ||
        ((player.pos[0] + player.width) < item.pos[0]) ||
        (player.pos[0] > (item.pos[0] + item.width))
      )){
        this.isCollidedWith(player, item);
      }
    }
  }

  isCollidedWith(player, object){
    if (object instanceof Obstacle) {
      if(this.powerup === 'shield'){
        this.obstacles.splice(this.obstacles.indexOf(object), 1);
        this.powerup = null;
      }else{
        this.gameOver = true;
      }
    } else if (object instanceof Coin) {
      this.coinCount += 1;
      this.removeCoin(object);
    }else if(object instanceof Shield){
      this.removePowerup(object);
      this.powerup = 'shield';
    }
  }

```

## Pause and Audio Control
Lightspeed Racer has logic implemented to detect whether the game is paused or over and will continue or reset respectively. 

The music will pause/play if game is paused/resumed but will remain silent if muted allowing players full control over music and can continue the game at their leisure. 
![Pause1 Image](https://github.com/Brent1LT/LightSpeed-Racer/blob/master/app/assets/pause1.png)

When clicked, the mute button will turn red to display that the music is muted
![Pause2 Image](https://github.com/Brent1LT/LightSpeed-Racer/blob/master/app/assets/pause2.png)

```
//game_view.js

pause(){
    if(this.game.gameOver){
      let newBackground = this.game.background;
      this.game = new Game(newBackground);
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
//index.js

mute.addEventListener('click', () => {
    mute.classList.toggle('mute');
    if (muted) {
      lightspeed.muted = false;
      muted = false;
      if(!lightspeed.paused){
        audio.play();
      }
    } else {
      lightspeed.muted = true;
      muted = true;
      audio.pause();
    }
  });
```

## Power-Ups
Power-ups were initially meant to be a bonus feature that would be implemented once the other
features were completed. Due to the timeline that I had laid out and stuck to, I was able to get 
my other work done early and implement a shield power-up.

The shield power-ups creates a new dynamic to the game and allows a player to be more reckless
and try harder to get a better score. 

Rendering a shield animation also adds more diversity to the game and an extra style element

![Shield Image](https://github.com/Brent1LT/LightSpeed-Racer/blob/master/app/assets/shield.png)


If player is collided with a Shield instance, it is stored in a class property and rendered around the player. When collided with an object in the Obstacle class, the Shield power-up is used and the player is protected against 1 Obstacle collision.
```
//game.js

isCollidedWith(player, object){
    if (object instanceof Obstacle) {
      if(this.powerup === 'shield'){
        this.obstacles.splice(this.obstacles.indexOf(object), 1);
        this.powerup = null;
      }else{
        this.gameOver = true;
      }
    } else if (object instanceof Coin) {
      this.coinCount += 1;
      this.removeCoin(object);
    }else if(object instanceof Shield){
      this.removePowerup(object);
      this.powerup = 'shield';
    }
  }

//player.js

if (powerup === 'shield'){
      if (this.tick > 5) {
        ctx.strokeStyle = "#f20cdf";
        this.tick = 0;
      } else {
        ctx.strokeStyle = "#0fe80b";
      }
      ctx.lineWidth = 5;
      
      ctx.arc(this.pos[0] + 19, this.pos[1] + 19, 30, 0, 2 * Math.PI);
      ctx.stroke();
    }
```

## Future Features 
* Add more power-up options and some hindering power-downs.
* Add a velocity for smoother contol of player avatar.
* Highscore leaderboard.
