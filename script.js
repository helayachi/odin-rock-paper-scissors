
// Game options 
const options = ['rock', 'paper', 'scissors'];

// logic to get the computer's random choice
let getComputerChoice = () => options[Math.floor(Math.random() * 3)];

/* Validate player's input & in range
1- isValid: ensures input is not empty
2- inRange: ensures input is one of the valid options
*/ 

let isValid = (input) => input !== "" && input !== " ";
let inRange = (input) => options.includes(input);

// logic to get the human choice
function getPlayerChoice()  {
    const input = prompt('Type: Rock Paper Scissors').toLowerCase();
    if (input === null) return;
    return isValid(input) && inRange(input) ? input : getPlayerChoice();
} 

// Compare choices and decide round winner
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

// Compare scores and decide overall game winner
function checkGameWinner() {
    if (playerScore === computerScore){ 
        return 'tie';
    } else if (playerScore > computerScore) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Update score after each round
function updateScore(winner) {
    
    if (winner === 'player') {
        playerScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        return;
    }
}

// Display Results
function showRoundWinner(winner) {

    if (winner === 'player') {
        alert(`Round winner: ${winner}`);
    } else {
        alert('It\'s tie');
    }
}

function showGameWinner(winner) {
    
    if (winner === 'player') {
        alert(`Game Over! ${winner} won this game \n
        Player : [${playerScore}] Computer : [${computerScore}] `);
    } else {
       alert('It\'s tie, Nice Game!');
    }
}

// Initialize player and computer score
let playerScore = 0;
let computerScore = 0;

// Handle one round of the game
function playRound(playerChoice, computerChoice) {
    let roundWinner = checkRoundWinner(playerChoice, computerChoice);
    showRoundWinner(roundWinner);
    updateScore(roundWinner);
}


/* Main game loop 
1- Plays multiple rounds
2- Show final winner 
*/

function playGame(rounds) {

for (let i = 0; i < rounds; i++) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    playRound(playerChoice, computerChoice);
}

let gameWinner = checkGameWinner();
showGameWinner(gameWinner);

}

