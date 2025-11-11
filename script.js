// Game options 
const options = ['rock', 'paper', 'scissors'];

// logic to get the computer choice
const getComputerChoice = () => options[Math.floor(Math.random() * 3)];

// Check if the human input is valid & in range
const isValid = (input) => input !== "" && input !== " ";
const inRange = (input) => input === "rock" || input === "paper" || input === "scissors";

// logic to get the human choice
function getPlayerChoice()  {
    const input = prompt("Type: Rock Paper Scissors").toLowerCase();
    return isValid(input) && inRange(input) ? input : getPlayerChoice();
} 


// human/computer score variables
let humanScore = 0;
let computerScore = 0;

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();


function playRound()
