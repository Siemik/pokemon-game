'use strict';
// Global Var
var howManyPoints = 0;
var round = 0;
var player = 0;
var teamRocket = 0;
var playerChoice;
var computerMove;
var error= false;

var papier=1;
var rock=2;
var scissors=3;

window.onload=function() {
// Buttons
  //
  // // Rock Button
  // document.getElementById('rockBTN').addEventListener('click', function(){
  //   if(howManyPoints<=player || howManyPoints<=teamRocket || error==true) {
  //     document.getElementById("roundsToWin").innerHTML = 'Click New Game.';
  //     gameOver ();
  //   }
  //   // Check if win
  //   else if (player === howManyPoints) {
  //     gameOver ();
  //     playerWin ();
  //   }
  //   // Check if lose
  //   else  if (teamRocket === howManyPoints) {
  //     gameOver ();
  //     playerLose ();
  //   }
  //   else {
  //     playerMove(2);
  //     round = round + 1;
  //     document.getElementById("nrOfRounds").innerHTML = round;
  //   }
  // });
  // //
  // // Paper Button
  // document.getElementById('paperBTN').addEventListener('click', function(){
  //   if(howManyPoints<=player || howManyPoints<=teamRocket || error==true) {
  //     document.getElementById("roundsToWin").innerHTML = 'Click New Game.';
  //     gameOver ();
  //   }
  //   // Check if win
  //   else if (player == howManyPoints) {
  //     gameOver ();
  //     playerWin ();
  //   }
  //   // Check if lose
  //   else  if (teamRocket === howManyPoints) {
  //     gameOver ();
  //     playerLose ();
  //   }
  //   else {
  //     playerMove(1);
  //     round = round + 1;
  //     document.getElementById("nrOfRounds").innerHTML = round;
  //   }
  // });
  // //
  // // Scissors Button
  // document.getElementById('scissorsBTN').addEventListener('click', function(){
  //   if(howManyPoints<=player || howManyPoints<=teamRocket || error==true) {
  //     document.getElementById("roundsToWin").innerHTML = 'Click New Game.';
  //     gameOver ();
  //   }
  //   // Check if win
  //   else if (player === howManyPoints) {
  //     gameOver ();
  //     playerWin ();
  //   }
  //   // Check if lose
  //   else  if (teamRocket === howManyPoints) {
  //     gameOver ();
  //     playerLose ();
  //   }
  //   else {
  //     playerMove(3);
  //     round = round + 1;
  //     document.getElementById("nrOfRounds").innerHTML = round;
  //   }
  // });
    //
    // New Game
  document.getElementById('newGameBTN').addEventListener('click', function(){
    howManyPoints = window.prompt('Points for a win');
    // Error Check
    if(howManyPoints===null || howManyPoints==='' || isNaN(howManyPoints)) {
      document.getElementById("roundsToWin").innerHTML = 'Something went wrong. Try again.';
      error=true;
    }
    else {
      // CSS Animation
      var teamRocketAnimation = document.getElementById("imgTeamR");
      teamRocketAnimation.classList.add("transform-active-teamRocket");
      var ashAnimation = document.getElementById("imgAsh");
      ashAnimation.classList.add("transform-active-ash");
      var headerAnimation = document.getElementById("headerStart");
      headerAnimation.classList.add("onOff");
      // refresh
      // round
      round = 0;
      document.getElementById("nrOfRounds").innerHTML = round;
      // player
      player = 0;
      document.getElementById("playerPunctation").innerHTML = player;
      // teamRocket
      teamRocket = 0;
      document.getElementById("teamRocketPunctation").innerHTML = teamRocket;

      var showRockBTNs = document.getElementById("rockBTN");
      var showPapierBTNs = document.getElementById("paperBTN");
      var showScissorsBTNs = document.getElementById("scissorsBTN");
      showRockBTNs.classList.remove("onOff");
      showPapierBTNs.classList.remove("onOff");
      showScissorsBTNs.classList.remove("onOff");
      document.getElementById("roundsToWin").innerHTML = 'The fight lasts up to ' + howManyPoints + ' points';
    }
});
}

// functions
function playerMove(playerChoice) {
  var computerMove = Math.floor((Math.random() * 3) + 1);
  if (playerChoice - computerMove === 0) {
    output.insertAdjacentHTML('afterEnd', 'Draw! Team Rocket played the same <hr>');
  }
  // Player choosed papier
  else if (playerChoice===papier) {
    if (computerMove===rock){
      // win
      computerMoveText (computerMove);
      playerMoveText (playerChoice);
      pointForPlayer ();
        // Check if win
        if (player == howManyPoints) {
          gameOver ();
          playerWin ();
        }
    }
    else if (computerMove===scissors){
      // lose
      computerMoveText (computerMove);
      playerMoveText (playerChoice);
      pointForComputer ();
      // Chec if lose
      if (teamRocket == howManyPoints) {
          gameOver ();
          playerLose ();
      }
    }
  }

  // Player choosed rock
  else if (playerChoice===rock) {
    if (computerMove===scissors){
      // win
      computerMoveText (computerMove);
      playerMoveText (playerChoice);
      pointForPlayer ();
        // Check if win
        if (player == howManyPoints) {
          gameOver ();
          playerWin ();
        }
    }
    else if (computerMove===papier){
      // lose
      computerMoveText (computerMove);
      playerMoveText (playerChoice);
      pointForComputer ();
        // Chec if lose
        if (teamRocket == howManyPoints) {
          gameOver ();
          playerLose ();
        }
    }
  }
  // Player choosed scissor
  else if (playerChoice===scissors) {
    if (computerMove===papier){
      // win
      computerMoveText (computerMove);
      playerMoveText (playerChoice);
      pointForPlayer ();
        // Check if win
        if (player == howManyPoints) {
          gameOver ();
          playerWin ();
        }
    }
    else if (computerMove===rock){
      // lose
      computerMoveText (computerMove);
      playerMoveText (playerChoice);
      pointForComputer ();
        // Check if lose
        if (teamRocket == howManyPoints) {
          gameOver ();
          playerLose ();
        }
     }
  }
}
// Player Win
function playerWin () {
  output.insertAdjacentHTML('afterEnd', 'YOU WON THE ENTIRE GAME!!!');
}
// Player Lose
function  playerLose () {
  output.insertAdjacentHTML('afterEnd', 'YOU LOSE THE ENTIRE GAME!!!');
}
// Game Over Alert
function gameOver () {
  output.insertAdjacentHTML('afterEnd', 'Please press the new game button!<hr>');
}
// 1 Point For Player
function pointForPlayer () {
  player = player + 1;
  document.getElementById("playerPunctation").innerHTML = player;
}
// 1 Point for Computer
function pointForComputer () {
  teamRocket = teamRocket + 1;
  document.getElementById("teamRocketPunctation").innerHTML = teamRocket;
}
// Computer Move In Game (text for player)
function computerMoveText (move) {
  if (move==1) {
    output.insertAdjacentHTML('afterEnd', 'Team Rocket played PAPIER. <br><hr>');
  }
  else if (move==2){
    output.insertAdjacentHTML('afterEnd', 'Team Rocket played ROCK. <br><hr>');
  }
  else if (move==3) {
    output.insertAdjacentHTML('afterEnd', 'Team Rocket played SCISSORS.<br><hr>');
  }
}
// Player Move In Game (text for player)
function playerMoveText (move) {
  if (move==1) {
    output.insertAdjacentHTML('afterEnd', 'you played PAPIER <br>');
  }
  else if (move==2) {
    output.insertAdjacentHTML('afterEnd', 'you played ROCK <br>');
  }
  else if (move==3) {
    output.insertAdjacentHTML('afterEnd', 'you played SCISSORS <br>');
  }
}
//Check points before player Move
function checkPointsBeforePlayerMove(dataMove) {
  if(howManyPoints<=player || howManyPoints<=teamRocket || error==true) {
    document.getElementById("roundsToWin").innerHTML = 'Click New Game.';
    gameOver ();
  }
  // Check if win
  else if (player === howManyPoints) {
    gameOver ();
    playerWin ();
  }
  // Check if lose
  else  if (teamRocket === howManyPoints) {
    gameOver ();
    playerLose ();
  }
  else {
    playerMove(dataMove);
    round = round + 1;
    document.getElementById("nrOfRounds").innerHTML = round;
  }
}
//Loop With Events

var allPlayerMoveClasses = document.querySelectorAll('.player-move');

  for(var i = 0; i < allPlayerMoveClasses.length; i++){
        // Pobiera wszystkie klasy
        var abc = allPlayerMoveClasses[i].getAttribute('data-move');
        //Dodaje event
        document.getElementById(allPlayerMoveClasses[i].id).addEventListener('click', function() {
          var PRS = {papier: 1, rock: 2, scissors: 3};
          checkPointsBeforePlayerMove(PRS[this.getAttribute('data-move')]);
        })
  }

//End Loop With Events
