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
  scissors: 3
};

window.onload=function() {
    // New Game
  document.getElementById('newGameBTN').addEventListener('click', function(){
    params.howManyPoints = window.prompt('Points for a win');
    // Error Check
    if(params.howManyPoints===null || params.howManyPoints==='' || isNaN(params.howManyPoints)) {
      document.getElementById("roundsToWin").innerHTML = 'Something went wrong. Try again.';
      params.error=true;
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
      document.getElementById("roundsToWin").innerHTML = 'The fight lasts up to ' + params.howManyPoints + ' points';
    }
});
};

// functions
function playerMove(playerChoice) {
  params.computerMove = Math.floor((Math.random() * 3) + 1);
  if (playerChoice - params.computerMove === 0) {
    output.insertAdjacentHTML('afterEnd', 'Draw! Team Rocket played the same <hr>');
  }
  // Player choosed papier
  else if (playerChoice===params.papier) {
    if (params.computerMove===params.rock){
      // win
      computerMoveText (params.computerMove);
      playerMoveText (playerChoice);
      pointForPlayer ();
        // Check if win
        if (params.player == params.howManyPoints) {
          gameOver ();
          playerWin ();
        }
    }
    else if (params.computerMove===params.scissors){
      // lose
      computerMoveText (params.computerMove);
      playerMoveText (playerChoice);
      pointForComputer ();
      // Chec if lose
      if (params.teamRocket == params.howManyPoints) {
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
        // Check if win
        if (params.player == params.howManyPoints) {
          gameOver ();
          playerWin ();
        }
    }
    else if (params.computerMove===params.papier){
      // lose
      computerMoveText (params.computerMove);
      playerMoveText (playerChoice);
      pointForComputer ();
        // Chec if lose
        if (params.teamRocket == params.howManyPoints) {
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
        // Check if win
        if (params.player == params.howManyPoints) {
          gameOver ();
          playerWin ();
        }
    }
    else if (params.computerMove===params.rock){
      // lose
      computerMoveText (params.computerMove);
      playerMoveText (playerChoice);
      pointForComputer ();
        // Check if lose
        if (params.teamRocket == params.howManyPoints) {
          gameOver ();
          playerLose ();
        }
     }
  }
};
// Player Win
function playerWin () {
  output.insertAdjacentHTML('afterEnd', 'YOU WON THE ENTIRE GAME!!!');
  document.getElementById('modal-overlay').classList.add("show");
  document.getElementById('modal-statistic').classList.add("show");
};
// Player Lose
function  playerLose () {
  output.insertAdjacentHTML('afterEnd', 'YOU LOSE THE ENTIRE GAME!!!');
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
    output.insertAdjacentHTML('afterEnd', 'you played PAPIER <br>');
  }
  else if (move==2) {
    output.insertAdjacentHTML('afterEnd', 'you played ROCK <br>');
  }
  else if (move==3) {
    output.insertAdjacentHTML('afterEnd', 'you played SCISSORS <br>');
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
  };


  var showModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.add('show');
	};

	// Mimo, że obecnie mamy tylko jeden link, stosujemy kod dla wielu linków. W ten sposób nie będzie trzeba go zmieniać, kiedy zechcemy mieć więcej linków lub guzików otwierających modale

	var modalLinks = document.querySelectorAll('.show-modal');

	for(var i = 0; i < modalLinks.length; i++){
		modalLinks[i].addEventListener('click', showModal);
	}

	// Dodajemy też funkcję zamykającą modal, oraz przywiązujemy ją do kliknięć na elemencie z klasą "close".

	var hideModal = function(event){
		event.preventDefault();
		document.querySelector('#modal-overlay').classList.remove('show');
	};

	var closeButtons = document.querySelectorAll('.modal .close');

	for(var i = 0; i < closeButtons.length; i++){
		closeButtons[i].addEventListener('click', hideModal);
	}

	// Dobrą praktyką jest również umożliwianie zamykania modala poprzez kliknięcie w overlay.

	document.querySelector('#modal-overlay').addEventListener('click', hideModal);

	// Musimy jednak pamiętać, aby zablokować propagację kliknięć z samego modala - inaczej każde kliknięcie wewnątrz modala również zamykałoby go.

	var modals = document.querySelectorAll('.modal');

	for(var i = 0; i < modals.length; i++){
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
