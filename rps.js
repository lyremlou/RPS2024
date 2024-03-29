function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * (3 - 0)) + 0;

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

//  console.log(getComputerChoice(randomNum));

// function plays single round
// takes two parameters playerSelection, computerSelection
// return string "You Lose! Paper beats Rock"
// playerSelection param is case insenstive
// return result

let playerScore = 0;

let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Rock") {
    return "Tie!";
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    computerScore += 1;
    console.log("Computer " + computerScore);
    return "You lose! Paper beats rock!";
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    playerScore += 1;
    console.log("Player " + playerScore);
    return "You win! Rock beats scissors!";
  }

  if (playerSelection == "Paper" && computerSelection == "Paper") {
    return "Tie!";
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    playerScore += 1;
    console.log("Player " + playerScore);
    return "You win! Paper beats rock!";
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    computerScore += 1;
    console.log("Computer " + computerScore);
    return "You lose! Scissors beats paper!";
  }

  if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    return "Tie!";
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    playerScore += 1;
    console.log("Player " + playerScore);
    return "You win! Scissors beats paper!";
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    computerScore += 1;
    console.log("Computer " + computerScore);
    return "You lose! Rock beats scissors!";
  } else {
    return "Please enter rock, paper or scissors";
  }
}

// playGame()
// use playRound() inside of playGame()
// loop to call playRound() 5 times in a row
// use console.log() to display results of each round
// use prompt() to get input from user

// function playGame() {
//  playRound(playerSelection, computerSelection);
// }

// function playGame() {

//     for (let i = 1; i <= 5; i++) {
//         let playerSelection = window.prompt("Please enter rock, paper, or scissors");
//         const computerSelection = getComputerChoice();
//         playRound(playerSelection, computerSelection);
//         console.log(playRound(playerSelection, computerSelection))
//         console.log(computerSelection);
//     }

// }

// playGame();

const rockButton = document.createElement("button");

const scissorsButton = document.createElement("button");

const paperButton = document.createElement("button");

rockButton.textContent = "Rock";

scissorsButton.textContent = "Scissors";

paperButton.textContent = "Paper";

rockButton.addEventListener("click", () => {
  playerSelection = "Rock";
  const computerSelection = getComputerChoice();
  let results = playRound(playerSelection, computerSelection);
  div.textContent = `Results: ${results} Computer Score: ${computerScore} Player Score: ${playerScore}`;

  if (computerScore == 5) {
    div.textContent = "Computer wins!"
  } else if (playerScore == 5) {
    div.textContent = "Player wins!"
  }
});

scissorsButton.addEventListener("click", () => {
  playerSelection = "Scissors";
  const computerSelection = getComputerChoice();
  let results = playRound(playerSelection, computerSelection);
  div.textContent = `Results: ${results} Computer Score: ${computerScore} Player Score: ${playerScore}`;

  if (computerScore == 5) {
    div.textContent = "Computer wins!"
  } else if (playerScore == 5) {
    div.textContent = "Player wins!"
  }
});

paperButton.addEventListener("click", () => {
  playerSelection = "Paper";
  const computerSelection = getComputerChoice();
  let results = playRound(playerSelection, computerSelection);
  div.textContent = `Results: ${results} Computer Score: ${computerScore} Player Score: ${playerScore}`;

  if (computerScore == 5) {
    div.textContent = "Computer wins!"
  } else if (playerScore == 5) {
    div.textContent = "Player wins!"
  }
});

document.body.appendChild(rockButton);
document.body.appendChild(paperButton);
document.body.appendChild(scissorsButton);

const div = document.createElement("div");

document.body.appendChild(div);
