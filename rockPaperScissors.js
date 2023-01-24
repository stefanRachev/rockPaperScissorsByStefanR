function game(playerTurn) {

    let computerTurn = 0;

    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    if (playerTurn == "r" || playerTurn == "rock") {
        playerTurn = rock;
        console.log(`You chooses ${rock}`);
    } else if (playerTurn == "p" || playerTurn == "paper") {
        playerTurn = paper;
        console.log(`You chooses ${paper}`)
    } else if (playerTurn == "s" || playerTurn == "scissorsissior") {
        playerTurn = scissors;
        console.log(`You chooses ${scissors}`)
    } else {
        console.log("Invali Input. Try Again...");
    }
    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

    switch (computerRandomNumber) {
        case 1: computerTurn = rock; break;
        case 2: computerTurn = paper; break;
        case 3: computerTurn = scissors; break;
    }
    console.log(`The computer chose ${computerTurn}.`);

    if ((playerTurn === rock && computerTurn === scissors)
        || (playerTurn === paper && computerTurn === rock)
        || (playerTurn === scissors && computerTurn === paper)) {
        console.log("You win!");
    } else if ((computerTurn === rock && playerTurn === scissors)
        || (computerTurn === paper && playerTurn === rock)
        || (computerTurn === scissors && playerTurn === paper)){
            console.log("You lose!");
        }else{
            console.log("This game was a draw!");
        }
}
game("p");
