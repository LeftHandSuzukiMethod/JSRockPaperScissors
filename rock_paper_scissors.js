
function computerPlay(){
    let gameArray = ['rock', 'paper', 'scissors'];
    return gameArray[Math.floor(Math.random() * gameArray.length)];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'You lose! Paper beats rock';
    }else if (playerSelection == 'rock' && computerSelection == 'rock'){
        return 'You tie! You have both selected rock';
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'You win! Rock beats scissors';
    }else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        return 'You lose! Scissors beats paper';
    }else if (playerSelection == 'paper' && computerSelection == 'paper'){
        return 'You tie! You have both selected paper';
    }else if (playerSelection == 'paper' && computerSelection == 'rock'){
        return 'You win! Paper beats rock';
    }else if (playerSelection == 'scissors' && computerSelection == 'rock'){
        return 'You lose! Rock beats scissors';
    }else if (playerSelection == 'scissors' && computerSelection == 'scissors'){
        return 'You tie! You have both selected scissors';
    }else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        return 'You win! Scissors beats paper';
    }

}

const computerSelection = computerPlay()
const playerSelection = 'RoCk'
console.log(playRound(playerSelection, computerSelection))
