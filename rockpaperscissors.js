/* Pseudocode & notes
Objective 1: write function to get computer choice

    Create function getComputerChoice
    Generate a random number to determine the computer choice
    Return "rock", "paper", or "scissors" based on the random number
    Test with console log to ensure this works
*/

function getComputerChoice() {
    // Generate a random integer (0,1, or 2)
    let randomNum = Math.floor(Math.random() * 3); 
    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Failed to make a choice";
    } 
}

/* Pseudocode & notes
Objective 2: write function to get human choice

    Create function getHumanChoice
    Prompt user to provide an input
    Test with console log to ensure this works
*/

function getHumanChoice() {
    let humanChoice = prompt("Chose rock, paper, or scissors");
    return humanChoice;
}

/* Pseudocode & notes
Objective 3: write scope variables for tracking score

    Create score variables for human and computer globally
    Initialize variables with value of 0
*/

let humanScore = 0;
let computerScore = 0;

/* Pseudocode & notes
Objective 4: write logic to play a single round

    Create function playRound
    Define parameters of humanChoice and computerChoice
    Make humanChoice case-insensitive
    Console log a string representing round winner
    Test with console log to ensure this works
*/

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);
    let victor = "nobody";
    if (humanChoice == "rock" && computerChoice == "scissors"){
        victor = "human";
        humanScore++;
        console.log(victor);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        victor = "human";
        humanScore++;
        console.log(victor);
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        victor = "human";
        humanScore++;
        console.log(victor);
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        victor = "computer";
        computerScore++;
        console.log(victor);
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        victor = "computer";
        computerScore++;
        console.log(victor);
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        victor = "computer";
        computerScore++;
        console.log(victor);
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);