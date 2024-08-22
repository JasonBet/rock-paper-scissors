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
    console.log(randomNum); 
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