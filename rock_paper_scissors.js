
function computerPlay(play){
    return 
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == 'rock' && computerSelection == 'paper'){
        return 'You lose! Paper beats rock';
    }else if (playerSelection == 'rock' && computerSelection == 'rock'){
        return 'You tie! You have both selected rock';
    }else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        return 'You win! Rock beats scissors'
    }

}