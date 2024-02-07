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
