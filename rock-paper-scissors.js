function computerPlay() {
    // Generates a random number (either 0, 1, or 2)
    const value = Math.floor(Math.random() * 3)
    
    // Returns string corresponding with value
    switch(value) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        default: 
        console.log("Warning, value chosen by computer was out of bounds");
        return "Value out of bounds";
    }
}

function playRound(playerSelection, computerSelection) {
    
    // Transform playerSelection to match format of computerSelection
    playerSelection = playerSelection.toLowerCase();

    // Define the messages that can be returned by this function
    const winMessage = `You win! ${playerSelection} beats ${computerSelection}.`
    const loseMessage =`You lose! ${computerSelection} beats ${playerSelection}.`
    const drawMessage = `It's a draw! You both picked ${playerSelection}.`
    const errorMessage = `The results could not be determined, since the value entered was invalid.`

    //Ensure the value entered by the player was valid: TO DO
    if (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")) {
        return errorMessage;
    }

    // Compare the two passed-in values to determine results
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock") return drawMessage;
            else if (computerSelection === "paper") return loseMessage;
            else if (computerSelection === "scissors") return winMessage;
            break;
        case "paper":
            if (computerSelection === "rock") return winMessage;
            else if (computerSelection === "paper") return drawMessage;
            else if (computerSelection === "scissors") return loseMessage;
            break;
        case "scissors":
            if (computerSelection === "rock") return loseMessage;
            else if (computerSelection === "paper") return winMessage;
            else if (computerSelection === "scissors") return drawMessage;
            break;
        default:
            return errorMessage;
    }
}

console.log(playRound(computerPlay(), computerPlay()));