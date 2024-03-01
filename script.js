const buttons = document.querySelectorAll('button');
const scores = document.getElementById('scoreboard');
const finalResult = document.getElementById('result');

finalResult.textContent = 'Let\'s play a game!';

let playerScore = 0;
let computerScore = 0;

let playerChoice = '';
    
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        playGame();
        scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    });
});

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
    
    if (playerScore < 5 && computerScore < 5) {
        let matchResult = playRound(playerChoice, getComputerChoice());
        if (matchResult.includes('win')) {
            playerScore++;
        } else if (matchResult.includes('lose')) {
            computerScore++;
        }
        finalResult.textContent = matchResult;
    } else if (finalResult) {
        finalResult.textContent = (playerScore > computerScore) ? `You win! ${playerScore} to ${computerScore}`:
        (playerScore === computerScore) ? "It's a tie ;~;" : `You lose :( ${computerScore} to ${playerScore}`;
    }
    
}