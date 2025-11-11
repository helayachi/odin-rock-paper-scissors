
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function getPlayerChoice() {
    const choice = +prompt("1) Rock 2) Paper 3) Scissors").trim();
    return isValid(choice) ? choice : alert("Opps! That's invalid.");
}

function isValid(input) {
    return +input !== NaN && +input !== 0 && +input >= 1 && +input <= 3;
}

function playerRound() {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    console.log(playerChoice);
}


playerRound();