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

function processSelection(e) {
    alert(playRound(e.target.innerText, computerPlay()));
}

const selectionButtons = document.querySelectorAll('.selection');
selectionButtons.forEach(button => button.addEventListener('click', processSelection));


///////////////
///GRAVEYARD///
///////////////

// Removed rounds functionality for now
function playGame() {
    // Config params
    const promptMessage = "Enter your selection below:";
    //const rounds = 5;

    // Display a message to let the player know what will follow.
    alert(`Let's play Rock, Paper, Scissors!`)
    
    // Plays specified number of rounds.
    //for (let i = 0; i < rounds; i++) {
        // Play a round and display the results
        alert(playRound(prompt(promptMessage), computerPlay()));
    //}
}



// Other ideas for when I return to this:
// - Verify value entered by the player is valid and make them try again until they
//   enter a valid value before proceeding with the game. 
// - Keep track of "points" and display total points at the end.