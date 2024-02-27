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




function playRound(playerSelection, computerSelection) {
  

  if (playerSelection == "Rock" && computerSelection == "Rock") {
    return "Tie!";
  } else if (
    playerSelection == "Rock" &&
    computerSelection == "Paper"
  ) {
    return "You lose! Paper beats rock!";
  } else if (
    playerSelection == "Rock" &&
    computerSelection == "Scissors"
  ) {
    return "You win! Rock beats scissors!";
  }

  if (playerSelection == "Paper" && computerSelection == "Paper") {
    return "Tie!";
  } else if (
    playerSelection == "Paper" &&
    computerSelection == "Rock"
  ) {
    return "You win! Paper beats rock!";
  } else if (
    playerSelection == "Paper" &&
    computerSelection == "Scissors"
  ) {
    return "You lose! Scissors beats paper!";
  }

  if (
    playerSelection == "Scissors" &&
    computerSelection == "Scissors"
  ) {
    return "Tie!";
  } else if (
    playerSelection == "Scissors" &&
    computerSelection == "Paper"
  ) {
    return "You win! Scissors beats paper!";
  } else if (
    playerSelection == "Scissors" &&
    computerSelection == "Rock"
  ) {
    return "You win! Scissors beats rock!";
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
    console.log(playRound(playerSelection, computerSelection));
});

scissorsButton.addEventListener("click", () => {
    playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
   
  });

  paperButton.addEventListener("click", () => {
    playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  });

  document.body.appendChild(rockButton);
  document.body.appendChild(paperButton);
  document.body.appendChild(scissorsButton);