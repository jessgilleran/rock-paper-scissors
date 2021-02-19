const rockBtn = document.querySelector('.rock-button');
rockBtn.addEventListener('click',function(){playRound('R')});

const paperBtn = document.querySelector('.paper-button');
paperBtn.addEventListener('click',function(){playRound('P')});

const scissorsBtn = document.querySelector('.scissors-button');
scissorsBtn.addEventListener('click',function(){playRound('S')});

const roundOneResult = document.querySelector('.round-one-score');
const roundTwoResult = document.querySelector('.round-two-score');
const roundThreeResult = document.querySelector('.round-three-score');
const roundFourResult = document.querySelector('.round-four-score');
const roundFiveResult = document.querySelector('.round-five-score');

const playerScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

//This function randomly decides the computers choice
function getComputerChoice() {
    //Determine the random number
    let randomNumber = getRandomInt(1,4);
    if (randomNumber === 1) {
        return 'R';
    } else if (randomNumber === 2) {
        return 'P';
    } else {
        return 'S';
    }
}

let roundNum = 1;
let playerTotal = 0;
let compTotal = 0;

//This function takes the computer and player choices and decides the winner
function playRound(playerChoice) {
    //Reset play if it's the first round
    if (roundNum === 1) {
        resetPlay();
    }
    
    //Get computer choice
    let compChoice = getComputerChoice();
    
    //Determine winner
    if (compChoice === 'R' && playerChoice == 'S') {
        compTotal++;
    } else if (compChoice === 'R' && playerChoice === 'P') {
        playerTotal++;
    } else if (compChoice === 'P' && playerChoice === 'R') {
        compTotal++;
    } else if (compChoice === 'P' && playerChoice === 'S') {
        playerTotal++;
    } else if (compChoice === 'S' && playerChoice === 'R') {
        playerTotal++;
    } else if (compChoice === 'S' && playerChoice === 'P') {
        compTotal++;
    }

    updateScores();
    updateRoundData(playerChoice,compChoice);
    
    //If roundNum is 5, reset to 1
    if (roundNum === 5) {
        displayWinner();
        roundNum = 1;
    } else {
        roundNum++;
    }
}

function updateScores()
 {
    playerScore.textContent = playerTotal;
    compScore.textContent = compTotal;
 }

 //Tracks the score
function updateRoundData (player,comp) {
    if (roundNum === 1) {
        roundOneResult.textContent = `${playerTotal} | ${player} | 1 | ${comp} | ${compTotal}`;
    } else if (roundNum === 2) {
        roundTwoResult.textContent = `${playerTotal} | ${player} | 2 | ${comp} | ${compTotal}`;
    } else if (roundNum === 3) {
    roundThreeResult.textContent = `${playerTotal} | ${player} | 3 | ${comp} | ${compTotal}`;
    } else if (roundNum === 4) {
        roundFourResult.textContent = `${playerTotal} | ${player} | 4 | ${comp} | ${compTotal}`;
    } else if (roundNum === 5) {
        roundFiveResult.textContent = `${playerTotal} | ${player} | 5 | ${comp} | ${compTotal}`;
    }
 }

function displayWinner() {
    if (playerTotal > compTotal) {
        playerScore.textContent = 'Win'
        compScore.textContent = 'Lose'
    } else if (playerTotal < compTotal) {
    playerScore.textContent = 'Lose'
    compScore.textContent = 'Win'
    } else {
        playerScore.textContent = 'Tied'
        compScore.textContent = 'Tied'
    }
}

function resetPlay() {
    //Reset counters to 0
    playerTotal = 0;
    compTotal = 0;
    updateScores();

    //Clear the score tracker
    roundOneResult.textContent = '';
    roundTwoResult.textContent = '';
    roundThreeResult.textContent = '';
    roundFourResult.textContent = '';
    roundFiveResult.textContent = '';
}



