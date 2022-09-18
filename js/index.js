const possibleChoices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('button');
const container = document.querySelector('.container');
const result_info = document.createElement('div');
const round_info = document.createElement('div');
const final_info = document.createElement('div');

let userScore = 0;
let computerScore = 0;
const rounds = 5;

function getComputerChoice(possibleChoices) {
    let randomChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    return randomChoice.toLowerCase();
}

function playRound(userChoice, possibleChoices) {
    let computerChoice = getComputerChoice(possibleChoices);

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

function playGame(possibleChoices) {
    let i = 1;
    buttons.forEach(button => button.addEventListener('click', function () {
            if(i>5) { return;}
            round_info.textContent = `Round: ${i}/${rounds}`;
            result_info.textContent = playRound(button.id, possibleChoices);
            container.appendChild(result_info);
            container.appendChild(round_info);    

            if (result_info.textContent.slice(0,5) === "You w") {
                userScore+=1;
            }
            else if (result_info.textContent.slice(0,5) === "You l") {
                computerScore+=1;
            }

            i++;

            if (userScore > computerScore) {
                final_info.textContent = "Winner is you!";
            }
            else if (userScore < computerScore) {
                final_info.textContent = "Winner is computer!";
            }
            else {
                final_info.textContent = "Draw";
            }
            container.appendChild(final_info);
            }));
}



playGame(possibleChoices);