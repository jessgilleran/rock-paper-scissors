
//This function generates a random number between 1 and 3 inclusive
//to make the computers choice
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}

//This function randomly decides the computers choice
function computerPlay() {
    //Determine the random number
    let randomNumber = getRandomInt(1,4);
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//This function gets the users choice
function userPlay() {
    let validChoice = false;
    let userChoice;

    while (validChoice === false) {
        userChoice = window.prompt("Choose rock, paper or scissors: ");
        //Lower case user choice to account for all cases
        userChoice = userChoice.toLowerCase();
        if (userChoice === 'rock'|| userChoice === 'paper' || userChoice === 'scissors') {
            validChoice = true;
        } else {
            alert("Incorrect input, enter rock, paper or scissors");
        }
    }
    return userChoice;
}

//This function takes the computer and player choices and decides the winner
function oneRound(compChoice,playerChoice) {
    //Determine if a tie
    if (compChoice === playerChoice) {
        console.log('It\'s a tie!');
        return 0;
    //Determine the rest of the conditions. If the player wins a 'P' is returned
    //if the computer wins a 'C' is returned
    } else if (compChoice === 'rock' && playerChoice == 'scissors') {
        console.log('Sorry, computer wins with rock vs. scissors.');
        return 'C';
    } else if (compChoice === 'rock' && playerChoice === 'paper') {
        console.log('You win with paper vs rock.');
        return 'P';
    } else if (compChoice === 'paper' && playerChoice === 'rock') {
        console.log('Sorry, computer wins with paper vs. rock.');
        return 'C';
    } else if (compChoice === 'paper' && playerChoice === 'scissors') {
        console.log('You win with scissors vs. paper.');
        return 'P';
    } else if (compChoice === 'scissors' && playerChoice === 'rock') {
        console.log('You win with rock vs scissors.');
        return 'P';
    } else if (compChoice === 'scissors' && playerChoice === 'paper') {
        console.log('Sorry, computer wins with scissors vs. paper.');
        return 'C';
    }
}



//Initialize gameplay
game();

