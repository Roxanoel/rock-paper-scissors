function computerPlay() {
    // Generates a random number (either 0, 1, or 2)
    const value = Math.floor(Math.random() * 3)
    
    // Returns string corresponding with value
    switch(value) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
        default: 
        console.log("Warning, value was out of bounds");
        return "Value out of bounds";
    }
}

console.log(computerPlay());

//function playRound(playerSelection, computerSelection)