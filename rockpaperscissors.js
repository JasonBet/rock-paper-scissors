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