let randomNum= Math.floor(Math.random() * (3 - 0) ) + 0;
console.log(randomNum);

function getComputerChoice(randomNum) {
    // Randomly return rock, paper, or scissors
    // return random number 
    // if statement 0 = rock, 1 = paper, 2 = scissors

if (randomNum == 0) {
    return "Rock";
} else if (randomNum == 1) {
    return "Paper";
} else if (randomNum == 2) {
    return "Scissors";
}

}

console.log(getComputerChoice(randomNum));

// function plays single round
// takes two parameters playerSelection, computerSelection
// return string "You Lose! Paper beats Rock"
// playerSelection param is case insenstive 
// return result 

function playRound(playerSelection, computerSelection) {

let lowerCasePlayerSelection = playerSelection.toLowerCase();
    
if (lowerCasePlayerSelection== "rock" && computerSelection == "Rock") {
        return "Tie!";
    } else if (lowerCasePlayerSelection == "rock" && computerSelection == "Paper") {
        return "You lose! Paper beats rock!"
    } else if (lowerCasePlayerSelection == "rock" && computerSelection == "Scissors") {
        return "You win! Rock beats scissors!"
    }

    if (lowerCasePlayerSelection== "paper" && computerSelection == "Paper") {
        return "Tie!";
    } else if (lowerCasePlayerSelection == "paper" && computerSelection == "Rock") {
        return "You win! Paper beats rock!"
    } else if (lowerCasePlayerSelection == "paper" && computerSelection == "Scissors") {
        return "You lose! Scissors beats paper!"
    }

    if (lowerCasePlayerSelection== "scissors" && computerSelection == "Scissors") {
        return "Tie!";
    } else if (lowerCasePlayerSelection == "scissors" && computerSelection == "Paper") {
        return "You win! Scissors beats paper!"
    } else if (lowerCasePlayerSelection == "scissors" && computerSelection == "Rock") {
        return "You win! Scissors beats rock!"
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice(randomNum);
console.log(playRound(playerSelection, computerSelection));