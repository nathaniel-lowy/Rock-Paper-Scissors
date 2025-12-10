function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    console.log(choice);
    if (choice === 0) {
        console.log("return rock");
    } else if (choice === 1) {
        console.log("return paper");
    } else {
        console.log("return scissors");
    }
}

getComputerChoice();