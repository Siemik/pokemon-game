'use strict';
var params = {
  howManyPoints: 0,
  round: 0,
  player: 0,
  teamRocket: 0,
  playerChoice: 0,
  computerMove: 0,
  error: false,
  papier: 1,
  rock: 2,
  scissors: 3,
  playerName: 'You',
  progress: []
};

window.onload=function() {
    // New Game
  document.getElementById('newGameBTN').addEventListener('click', function(){
    params.progress.length  = 0;
    document.getElementById('modal-overlay-new-game').classList.add("show");
    document.getElementById('modal-new-game').classList.add("show");
      // round
      params.round = 0;
      document.getElementById("nrOfRounds").innerHTML = params.round;
      // player
      params.player = 0;
      document.getElementById("playerPunctation").innerHTML = params.player;
      // teamRocket
      params.teamRocket = 0;
      document.getElementById("teamRocketPunctation").innerHTML = params.teamRocket;

      var showRockBTNs = document.getElementById("rockBTN");
      var showPapierBTNs = document.getElementById("paperBTN");
      var showScissorsBTNs = document.getElementById("scissorsBTN");
      showRockBTNs.classList.remove("onOff");
      showPapierBTNs.classList.remove("onOff");
      showScissorsBTNs.classList.remove("onOff");
});
};

// functions
function playerMove(playerChoice) {
  params.progress.push(params.round+1);
  params.progress.push(playerChoice);
  params.computerMove = Math.floor((Math.random() * 3) + 1);
  params.progress.push(params.computerMove);
  if (playerChoice - params.computerMove === 0) {
    output.insertAdjacentHTML('afterEnd', 'Draw! Team Rocket played the same <hr>');
    params.progress.push('Drawn');
  }
  // Player choosed papier
  else if (playerChoice===params.papier) {
    if (params.computerMove===params.rock){
      // win
      computerMoveText (params.computerMove);
      playerMoveText (playerChoice);
      pointForPlayer ();
      params.progress.push('Won');
        // Check if win
        if (params.player == params.howManyPoints) {
          params.progress.push(params.player +':'+ params.teamRocket);
          gameOver ();
          playerWin ();
        }
    }
    else if (params.computerMove===params.scissors){
      // lose
      computerMoveText (params.computerMove);
      playerMoveText (playerChoice);
      pointForComputer ();
      params.progress.push('Lost');
      // Check if lose
      if (params.teamRocket == params.howManyPoints) {
        params.progress.push(params.player +':'+ params.teamRocket);
          gameOver ();
          playerLose ();
      }
    }
  }

  // Player choosed rock
  else if (playerChoice===params.rock) {
    if (params.computerMove===params.scissors){
      // win
      computerMoveText (params.computerMove);
      playerMoveText (playerChoice);
      pointForPlayer ();
      params.progress.push('Won');
        // Check if win
        if (params.player == params.howManyPoints) {
          params.progress.push(params.player +':'+ params.teamRocket);
          gameOver ();
          playerWin ();
        }
    }
    else if (params.computerMove===params.papier){
      // lose
      computerMoveText (params.computerMove);
      playerMoveText (playerChoice);
      pointForComputer ();
      params.progress.push('Lost');
        // Chec if lose
        if (params.teamRocket == params.howManyPoints) {
          params.progress.push(params.player +':'+ params.teamRocket);
          gameOver ();
          playerLose ();
        }
    }
  }
  // Player choosed scissor
  else if (playerChoice===params.scissors) {
    if (params.computerMove===params.papier){
      // win
      computerMoveText (params.computerMove);
      playerMoveText (playerChoice);
      pointForPlayer ();
      params.progress.push('Won');
        // Check if win
        if (params.player == params.howManyPoints) {
          params.progress.push(params.player +':'+ params.teamRocket);
          gameOver ();
          playerWin ();
        }
    }
    else if (params.computerMove===params.rock){
      // lose
      computerMoveText (params.computerMove);
      playerMoveText (playerChoice);
      pointForComputer ();
      params.progress.push('Lost');
        // Check if lose
        if (params.teamRocket == params.howManyPoints) {
          params.progress.push(params.player +':'+ params.teamRocket);
          gameOver ();
          playerLose ();
        }
     }
  }
  params.progress.push(params.player +':'+ params.teamRocket);
  console.log(params.progress);
};
// Player Win
function playerWin () {
  output.insertAdjacentHTML('afterEnd', params.playerName +' WON THE ENTIRE GAME!!!');
  document.getElementById('winnerheder').innerHTML = params.playerName +' won the entire game!<p>';
  creatSummaryGameTable ();
  document.getElementById('modal-overlay').classList.add("show");
  document.getElementById('modal-statistic').classList.add("show");
};
// Player Lose
function  playerLose () {
  output.insertAdjacentHTML('afterEnd', params.playerName +' LOSE THE ENTIRE GAME!!!');
  document.getElementById('winnerheder').innerHTML = params.playerName +' lost entire game!</p>';
  creatSummaryGameTable ();
  document.getElementById('modal-overlay').classList.add("show");
  document.getElementById('modal-statistic').classList.add("show");
};
// Game Over Alert
function gameOver () {
  output.insertAdjacentHTML('afterEnd', 'Please press the new game button!<hr>');
};
// 1 Point For Player
function pointForPlayer () {
  params.player = params.player + 1;
  document.getElementById("playerPunctation").innerHTML = params.player;
};
// 1 Point for Computer
function pointForComputer () {
  params.teamRocket = params.teamRocket + 1;
  document.getElementById("teamRocketPunctation").innerHTML = params.teamRocket;
};
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
};
// Player Move In Game (text for player)
function playerMoveText (move) {
  if (move==1) {
    output.insertAdjacentHTML('afterEnd', params.playerName +' played PAPIER <br>');
  }
  else if (move==2) {
    output.insertAdjacentHTML('afterEnd', params.playerName +' played ROCK <br>');
  }
  else if (move==3) {
    output.insertAdjacentHTML('afterEnd', params.playerName +' played SCISSORS <br>');
  }
};
//Check points before player Move
function checkPointsBeforePlayerMove(dataMove) {
  if(params.howManyPoints<=params.player || params.howManyPoints<=params.teamRocket || params.error==true) {
    document.getElementById("roundsToWin").innerHTML = 'Click New Game.';
    gameOver ();
  }
  // Check if win
  else if (params.player === params.howManyPoints) {
    gameOver ();
    playerWin ();
  }
  // Check if lose
  else  if (params.teamRocket === params.howManyPoints) {
    gameOver ();
    playerLose ();
  }
  else {
    playerMove(dataMove);
    params.round = params.round + 1;
    document.getElementById("nrOfRounds").innerHTML = params.round;
  }
};
// Creat table
function creatSummaryGameTable () {
var summaryGameTable = "<table><tbody><tr><td>Rounds</td><td>Player Move</td><td>Team R Move</td><td>Outcome</td><td>Score</td></tr><tr>";
for (var i = 1; i <= params.progress.length; i++) {
    if (i % 5 == 1 && i != 1) {
        summaryGameTable += "</tr><tr>";
    }
    summaryGameTable += "<td>" + params.progress[i-1] + "</td>";
}
summaryGameTable += "</tr></tbody></table>";
document.getElementById('winnerinfo').innerHTML = summaryGameTable;
}
//Loop With Events
var allPlayerMoveClasses = document.querySelectorAll('.player-move');
  for(var i = 0; i < allPlayerMoveClasses.length; i++){
        var abc = allPlayerMoveClasses[i].getAttribute('data-move');
        document.getElementById(allPlayerMoveClasses[i].id).addEventListener('click', function() {
          var PRS = {papier: 1, rock: 2, scissors: 3};
          checkPointsBeforePlayerMove(PRS[this.getAttribute('data-move')]);
        })
  };
//New Game Modal
function newGameModal () {
      params.playerName = document.getElementById('nickModal').value;
        if (params.playerName == '') {
          params.playerName= 'You';
        }
      console.log(params.playerName);
      var points = document.getElementById('roundsModal').value;
      params.howManyPoints = points;
      console.log(points);
      if(params.howManyPoints===null || params.howManyPoints==='' || isNaN(params.howManyPoints)) {
        document.getElementById("errorInfoNewGame").innerHTML = 'Incorrect points input.<br> Enter the number of points correctly. <br>Otherwise, the team R will <br>think that you are scared! <br>Try again.';
      }
      else {
      document.getElementById("errorInfoNewGame").innerHTML = ''
      document.getElementById('modal-overlay-new-game').classList.remove('show');
      document.getElementById('modal-new-game').classList.remove('show');
      document.getElementById("roundsToWin").innerHTML = 'The fight lasts up to ' + params.howManyPoints + ' points';
      var teamRocketAnimation = document.getElementById("imgTeamR");
      teamRocketAnimation.classList.add("transform-active-teamRocket");
      var ashAnimation = document.getElementById("imgAsh");
      ashAnimation.classList.add("transform-active-ash");
      var headerAnimation = document.getElementById("headerStart");
      headerAnimation.classList.add("onOff");
      }
}
//Summary Game Modal
  var showModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.add('show');
    document.querySelector('#modal-overlay-new-game').classList.add('show');
	};
	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
    document.querySelector('#modal-overlay-new-game').classList.remove('show');
	};
	var closeButtons = document.querySelectorAll('.modal .close');
	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}
	document.querySelector('#modal-overlay').addEventListener('click', hideModal);
  document.querySelector('#modal-overlay-new-game').addEventListener('click', hideModal);
	var modals = document.querySelectorAll('.modal');

	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
