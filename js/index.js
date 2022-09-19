const maxLives = 3;
let userLives = maxLives;
let computerLives = maxLives;

let currentRound = 1;
let gameFinished = false;

const possibleChoices = ['rock', 'paper', 'scissors'];

const warriors = document.querySelectorAll('button');
const battlefield = document.querySelector('.battlefield');

const roundInfo = document.querySelector('#round');
const userLivesInfo = document.querySelector('#user-lives');
const computerLivesInfo = document.querySelector('#computer-lives');
const battleResult = document.querySelector('.battle-result');
const warResult = document.querySelector('.war-result');
const computerChoiceInfo = document.querySelector('.computer-section');

const optionRestart = document.createElement('button');

function getComputerChoice(possibleChoices) {
    let randomChoice = possibleChoices[Math.floor(Math.random()*possibleChoices.length)];
    let computerChoiceInfoImage = document.querySelector('#computer-choice-image')

    if (randomChoice === 'rock') {
        computerChoiceInfoImage.src = './images/paladin.png';
    }
    else if (randomChoice === 'paper') {
        computerChoiceInfoImage.src = './images/elf.png';
    }
    else { 
        computerChoiceInfoImage.src = './images/wizard.png';
    }
//    computerChoiceInfo.appendChild(computerChoiceInfoImage);
    return randomChoice.toLowerCase();
}

function playRound(userChoice, computerChoice) {
    let userChoiceIndex = possibleChoices.indexOf(userChoice);
    let computerChoiceIndex = possibleChoices.indexOf(computerChoice);

    if ((userChoiceIndex - computerChoiceIndex) === 1 || (userChoiceIndex - computerChoiceIndex) === -2) {
        computerLives-=1;
        battleResult.textContent = `You win: ${userChoice} beats ${computerChoice}!`;
    }
    else if ((userChoiceIndex - computerChoiceIndex) === -1 || (userChoiceIndex - computerChoiceIndex) === 2) {
        userLives-=1;
        battleResult.textContent = `You lose: ${computerChoice} beats ${userChoice}!`;
    }
    else {
        battleResult.textContent = `Tie!`;
    }

    userLivesInfo.textContent = `Your lives: ${userLives}`;
    computerLivesInfo.textContent = `Computer lives: ${computerLives}`;
}

function declareWinner() {
    if(computerLives === 0) { 
        warResult.textContent = 'You defeated the monster!';
        gameFinished = true;
    }
    else if(userLives === 0) { 
        warResult.textContent = 'Monster ate your children!';
        gameFinished = true;
    }
}

function resetGame() {
    if (gameFinished) {
        optionRestart.innerHTML = `Play again`;
        optionRestart.addEventListener('click', () => {window.location.reload();});
        battlefield.appendChild(optionRestart); 
        warriors.forEach(button => button.disabled = true);
    }

}

function countRounds() {
    roundInfo.textContent = (`Round: ${currentRound}`);
    currentRound+=1;
}

function playGame(possibleChoices) {
    warriors.forEach(warrior => warrior.addEventListener('click', () => {
        let userChoice = warrior.id;
        let computerChoice = getComputerChoice(possibleChoices);

        countRounds();
        playRound(userChoice, computerChoice);
        declareWinner();
        resetGame();
    })
    );
}



playGame(possibleChoices);