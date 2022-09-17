function getComputerChoice(possibleChoices) {
    let randomChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return randomChoice.toLowerCase();
}

function getUserChoice(possibleChoices) {
    let userChoice = prompt(`Please choose your warrior among ${possibleChoices.join(', ')}`);
    return userChoice.toLowerCase();
}

function playRound(computerChoice, userChoice, possibleChoices) {
    let userChoiceIndex = possibleChoices.indexOf(userChoice);
    let computerChoiceIndex = possibleChoices.indexOf(computerChoice);

    if ((userChoiceIndex - computerChoiceIndex) === 1 || (userChoiceIndex - computerChoiceIndex) === -2) {
        return `You win: ${userChoice} beats ${computerChoice}!`;
    }
    else if ((userChoiceIndex - computerChoiceIndex) === -1 || (userChoiceIndex - computerChoiceIndex) === 2) {
        return `You lose: ${computerChoice} beats ${userChoice}!`;
    }
    else {
        return `Tie!`;
    }
}

function game(possibleChoices) {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice(possibleChoices);
        let userChoice = getUserChoice(possibleChoices);

        let result = playRound(computerChoice, userChoice, possibleChoices);

        console.log(`Round ${i+1}/5`)
        console.log(result);
        
        if (result.slice(0,5) === "You w") {
            userScore+=1;
        }
        else if (result.slice(0,5) === "You l") {
            computerScore+=1;
        }
    }

    if (userScore > computerScore) {
        console.log("Winner is you!");
    }
    else if (userScore < computerScore) {
        console.log("Winner is computer!");
    }
    else {
        console.log("Impossible!");
    }


}

const possibleChoices = ['rock', 'paper', 'scissors'];

game(possibleChoices);