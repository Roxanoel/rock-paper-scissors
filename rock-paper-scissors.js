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
    const drawMessage = `It's a draw! You both picked ${playerSelection}.`

    //Ensure the value entered by the player was valid: TO DO
    if (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")) {
        return errorMessage;
    }

    // Compare the two passed-in values to determine results
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "rock") return drawMessage;
            else if (computerSelection === "paper") return processComputerWin(computerSelection, playerSelection);
            else if (computerSelection === "scissors") return processPlayerWin(computerSelection, playerSelection);
            break;
        case "paper":
            if (computerSelection === "rock") return processPlayerWin(computerSelection, playerSelection);
            else if (computerSelection === "paper") return drawMessage;
            else if (computerSelection === "scissors") return processComputerWin(computerSelection, playerSelection);
            break;
        case "scissors":
            if (computerSelection === "rock") return processComputerWin(computerSelection, playerSelection);
            else if (computerSelection === "paper") return processPlayerWin(computerSelection, playerSelection);
            else if (computerSelection === "scissors") return drawMessage;
            break;
        default:
            return errorMessage;
    }
}

function processComputerWin(computerSelection, playerSelection) {
    computerScore +=1;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
}

function processPlayerWin(computerSelection, playerSelection) {
    playerScore +=1;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
}


function processSelection(e) {
    resultsDisplay.innerText = playRound(e.target.innerText, computerPlay());
    updateScoreDisplay();
}

function updateScoreDisplay() {
    computerScoreDisplay.innerText = computerScore.toString();
    playerScoreDisplay.innerText = playerScore.toString();
}

const selectionButtons = document.querySelectorAll('.selection');
selectionButtons.forEach(button => button.addEventListener('click', processSelection));

const resultsDisplay = document.querySelector('.results-message');
const playerScoreDisplay = document.querySelector('.player');
const computerScoreDisplay = document.querySelector('.computer');

let playerScore = 0;
let computerScore = 0;




// Other ideas for when I return to this:
// - Verify value entered by the player is valid and make them try again until they
//   enter a valid value before proceeding with the game. 
// - Keep track of "points" and display total points at the end.