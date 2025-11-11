// logic to get the computer choice
const getComputerChoice = () => ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
// logic to get the human choice
const getPlayerChoice = () => +prompt("1) Rock 2) Paper 3) Scissors");
// Check if the human input is valid
const isValid = (input) => input !== NaN && input !== 0 && input >= 1 && input <= 3;

