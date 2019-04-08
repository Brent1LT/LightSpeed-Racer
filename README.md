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

## Future Features 
* Add more power-up options and some hindering power-downs.
* Add a velocity for smoother contol of player avatar.
