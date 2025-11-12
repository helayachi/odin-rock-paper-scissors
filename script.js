// Game options 
const options = ['rock', 'paper', 'scissors'];

// logic to get the computer choice
let getComputerChoice = () => options[Math.floor(Math.random() * 3)];

// Check if the human input is valid & in range
let isValid = (input) => input !== "" && input !== " ";
let inRange = (input) => input === "rock" || input === "paper" || input === "scissors";

// logic to get the human choice
function getPlayerChoice()  {
    const input = prompt('Type: Rock Paper Scissors').toLowerCase();
    return isValid(input) && inRange(input) ? input : getPlayerChoice();
} 

function checkRoundWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    } else if (playerChoice === "rock" && computerChoice === "scissors"
        || playerChoice === "scissors" && computerChoice === "paper" 
        || playerChoice === "paper" && computerChoice === "rock"){   
        return 'player';
    } else {
        return 'computer';
    }  
}

function checkGameWinner() {
    if (playerScore === computerScore){ 
        return 'tie';
    } else if (playerScore > computerScore) {
        return 'player';
    } else {
        return 'computer';
    }
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        return;
    }
}

function showRoundWinner(winner) {
    winner === 'player' || winner === 'computer' 
    ? alert(`Round winner: ${winner}`) : alert('It\'s tie');
}

// human/computer score variables
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
    let roundWinner = checkRoundWinner(playerChoice, computerChoice);
    showRoundWinner(roundWinner);
    updateScore(roundWinner);
}

function showGameWinner(winner) {
    winner === 'player' || winner === 'computer' 
    ? alert(`Game Over! ${winner} won this game \nPlayer : [${playerScore}] Computer : [${computerScore}] `) : alert('It\'s tie, Nice Game!');
}

function playGame(rounds) {


for (let i = 0; i < rounds; i++) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    playRound(playerChoice, computerChoice);
}

let gameWinner = checkGameWinner();
showGameWinner(gameWinner);

}

