/*

Rock paper scissors game based on the Odin Project's foundation lesson
Author: Nathaniel Lowy
NOTE: While this does follow the lesson, there are a few different ways
to optimize the code. However, I currently feel that it is sufficient, and
that such changes are not in keeping with the spirit of the course. Of course,
this may change at a later date for practice purposes.

*/

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const userScoreDiv = document.querySelector("#userScore");
const computerScoreDiv = document.querySelector("#computerScore");
const resultDiv = document.querySelector("#result");
const gameWinner = document.querySelector("#gameWinner");

rockButton.addEventListener("click", () => {playGame("ROCK")});
paperButton.addEventListener("click", () => {playGame("PAPER")});
scissorsButton.addEventListener("click", () => {playGame("SCISSORS")});


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


function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        resultDiv.textContent = "You tied!";
        return;
    }

    if (humanChoice === "ROCK") {
        if (computerChoice === "PAPER") {
            computerScore++;
            resultDiv.textContent = "You lose! Paper beats rock!";
        } else {
            humanScore++;
            resultDiv.textContent = "You win! Rock beats scissors!";
        }
    } else if (humanChoice === "PAPER") {
        if (computerChoice === "SCISSORS") {
            computerScore++;
            resultDiv.textContent =  "You lose! Scissors beat paper!";
        } else {
            humanScore++;
            resultDiv.textContent =  "You win! Paper beats rock!";
        }
    } else {
        if (computerChoice === "ROCK") {
            computerScore++;
            resultDiv.textContent =  "You lose! Rock beats scissors!";
        } else {
            humanScore++;
            resultDiv.textContent =  "You win! Scissors beat paper!";
        }
    }
    updateScore();

    if (humanScore === 5) {
        gameWinner.textContent = "YOU WIN THE GAME!";
        resultDiv.textContent = "Click a button to reset.";
        gameOver = true;
    } else if (computerScore === 5) {
        gameWinner.textContent = "COM WINS THE GAME!";
        resultDiv.textContent = "Click a button to reset.";
        gameOver = true;
    }
}

function updateScore() {
    userScoreDiv.textContent = humanScore;
    computerScoreDiv.textContent = computerScore;
}


function playGame(choice) {
    if (gameOver) {
        humanScore = 0;
        computerScore = 0;
        updateScore();
        gameWinner.textContent = "YOU | COM";
        resultDiv.textContent = "Click a button to begin."
        gameOver = false;
    } else {
        playRound(choice);
    }
}
// playGame();