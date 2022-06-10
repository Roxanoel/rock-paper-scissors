function computerPlay() {
    // Generates a random number (either 0, 1, or 2)
    const value = Math.floor(Math.random() * 3)
    
    // Returns string corresponding with value
    switch(value) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        default: 
        console.log("Warning, value was out of bounds");
        return "Value out of bounds";
    }
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection) {
    
    // Transform playerSelection to match format of computerSelection
    playerSelection = playerSelection.toLowerCase();

    // Define the messages that can be returned by this function
    const winMessage = `You win! ${playerSelection} beats ${computerSelection}.`
    const loseMessage =`You lose! ${computerSelection} beats ${playerSelection}.`
    const drawMessage = `It's a draw! You both picked ${playerSelection}.`

    //
}