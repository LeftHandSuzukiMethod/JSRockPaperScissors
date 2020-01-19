// Written by Mitchell Ladwig, 1/18/20
// declaring variables
let computerWins = 0;
let playerWins = 0;
let computerSelection = computerPlay()
let playerSelection;

// generates a random choice for the computer player
function computerPlay(){
    let gameArray = ['rock', 'paper', 'scissors'];
    return gameArray[Math.floor(Math.random() * gameArray.length)];
}
// Plays a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerWins++;
        return 'You lose! Paper beats rock'; 
    }else if (playerSelection == 'rock' && computerSelection == 'rock'){
        return 'You tie! You have both selected rock';
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerWins++;
        return 'You win! Rock beats scissors'; 
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerWins++;
        return 'You lose! Scissors beats paper';
    }else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return 'You tie! You have both selected paper';
    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerWins++;
        return 'You win! Paper beats rock';
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        computerWins++;
        return 'You lose! Rock beats scissors';
    }else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 'You tie! You have both selected scissors';
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerWins++;
        return 'You win! Scissors beats paper';
    }

}
// Plays five rounds of Rock, Paper, Scissors and declares a winner
function game(){
    let counter;

    for (counter = 0; counter < 5; counter++){
        playerSelection = prompt('Enter what you will play for round ' + (counter + 1) + ': rock, paper, or scissors?');
        console.log(playRound(playerSelection, computerPlay()));
    }
    if (playerWins > computerWins){
        console.log('Player has won with ' + playerWins + ' wins');
    }else if (playerWins < computerWins){
        console.log('Computer has won with ' + computerWins + ' wins');
    }else{
        console.log('You have tied!');
    }
    }


game();
