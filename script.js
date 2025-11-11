
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
    
    if ( isValid(choice) ){
        
        if (choice === 1) {
            return "rock";
        } else if ( choice === 2){ 
            return "paper";
        } else if ( choice === 3){ 
            return "scissors";
        }
    } else {
        return console("OPs! That's invalid input, Try again.");
    }
}

function isValid(input) {
    return +input !== NaN && +input !== 0 && +input >= 1 && +input <= 3;
}

function checkRoundWinner(playerChoice, computerChoice) {
   
    if (playerChoice === "rock" && computerChoice === "scissors"
        || playerChoice === "scissors" && computerChoice === "paper" 
        || playerChoice === "paper" && computerChoice === "rock"){   
    return 'player';
    } else if (playerChoice === computerChoice) {
        return 'tie';
    } else {
        return 'computer';
    }

}

function playerRound() {

    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();

    const roundWinner = checkRoundWinner(playerChoice, computerChoice);

    if (roundWinner === 'player') {
        console.log(`Computer: ${computerChoice} / Player: ${playerChoice}`);
        console.log('*** You win ***')
        ++playerScore;
        ++roundCount;
    } else if (roundWinner === 'computer') {
        console.log(`Computer: ${computerChoice} Vs. Player: ${playerChoice}`);
        console.log('--- You lose ---');
        ++computerScore;
        ++roundCount
    } else {
        console.log('~~~ Tie! Try again ~~~');
        ++roundCount;
    }
}


playerRound();