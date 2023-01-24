function game() {

    let playerTurn = 0;
    let computerTurn = 0;

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "scissors";

    if (playerTurn == "r" || playerTurn == "rock") {
        playerTurn = rock;
    } else if (playerTurn == "p" || playerTurn == "paper") {
        playerTurn = paper;
    } else if (playerTurn == "s" || playerTurn == "scissorsissior") {
        playerTurn = scissors;
    } else {
        console.log("Invali Input. Try Again...");
    }
    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

    switch (computerRandomNumber) {
        case computerTurn: "Rock";
            computerTurn = rock; break;
        case computerTurn: "Paper";
            computerTurn = paper; break;
        case computerTurn: "scissors"
            computerTurn = scissors; break;
    }
    console.log(`The computer chose ${computerTurn}.`);

    if ((playerTurn === rock && computerTurn === scissors)
    || (playerTurn === paper && computerTurn === rock) 
    || (playerTurn === scissors && computerTurn === paper)){
        console.log("You win!");
    }
}
game();
