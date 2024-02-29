function getComputerChoice() {
    const moves = ['rock', 'paper', 'scissors'];
    const computerChoice = Math.floor(Math.random() * 3);
    return moves[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose :( ${computerSelection} beats ${playerSelection}`;
    }    
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, or Scissors?');
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        result.includes('win') ? playerScore++ : result.includes('lose') ? computerScore++ : null;
        console.log(result);
    }
    console.log((playerScore > computerScore) ? "You win!" :
    (playerScore === computerScore) ? "It's a tie ;~;" : "You lose :(");
}

playGame();