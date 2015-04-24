////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt().toLowerCase();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = getInput();
    if ((move == 'rock') || (move == 'paper') || (move == 'scissors')){
        return move;
    }
    else {
        return getPlayerMove();
    }

    //return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */    
    
    var winner;
    var p = 'paper';
    var r = 'rock';
    var s = 'scissors';

    if (playerMove === p && computerMove === r) {
        winner = 'player';
    }
    else if (playerMove === r && computerMove === s) {
        winner = 'player';
    }
    else if (playerMove === s && computerMove === p) {
        winner = 'player';
    }
    else if (playerMove === computerMove){
        winner = 'tie';
    } else {
        winner = 'computer';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {

      var computerMove = getComputerMove();
      var playerMove = getPlayerMove();
      var winner = getWinner(playerMove,computerMove);

      if (winner === 'player') {
        playerWins += 1;
      }
      else if (winner === 'computer') {
        computerWins += 1;
      }
        console.log('You played ' + playerMove + ' and the computer played ' + computerMove + '. \n');
        console.log('The current score is Player ' + playerWins + ' to Computer ' + computerWins + '. \n');
    }

    return 'And the winner is... ' + winner + '! Score:' + [playerWins, computerWins];}
playToFive();
