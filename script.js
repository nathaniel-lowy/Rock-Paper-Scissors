/*

Rock paper scissors game based on the Odin Project's foundation lesson
Author: Nathaniel Lowy
NOTE: While this does follow the lesson, there are a few different ways
to optimize the code. However, I currently feel that it is sufficient, and
that such changes are not in keeping with the spirit of the course. Of course,
this may change at a later date for practice purposes.

*/

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "ROCK";
    } else if (choice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter either 'Rock', 'Paper', or 'Scissors' without the quotation marks:").toUpperCase();
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        // console.log("Human choice = " + humanChoice);
        // console.log("Computer choice = " + computerChoice);

        if (humanChoice === computerChoice) {
            return "You tied!";
        }

        if (humanChoice === "ROCK") {
            if (computerChoice === "PAPER") {
                computerScore++;
                return "You lose! Paper beats rock!";
            } else {
                humanScore++;
                return "You win! Rock beats scissors!";
            }
        } else if (humanChoice === "PAPER") {
            if (computerChoice === "SCISSORS") {
                computerScore++;
                return "You lose! Scissors beat paper!";
            } else {
                humanScore++;
                return "You win! Paper beats rock!";
            }
        } else {
            if (computerChoice === "ROCK") {
                computerScore++;
                return "You lose! Rock beats scissors!";
            } else {
                humanScore++;
                return "You win! Scissors beat paper!";
            }
        }

    }

    for (let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);

}


playGame();