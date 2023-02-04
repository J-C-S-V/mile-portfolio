/*Scores*/
let manScore = 0;
let computerScore = 0;

/*HTML elements*/
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const manScoreText = document.querySelector('.manScore');
const computerScoreText = document.querySelector('.computerScore');

/*Helper function to get the computers answer*/
function getComputerChoice() {
  if (Math.ceil(Math.random() * 3) === 1) {
    return 'Rock';
  } else if (Math.ceil(Math.random() * 3) === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}

/*Checks who wins the round*/
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);

  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    computerScore += 1;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    manScore += 1;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    computerScore += 1;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    manScore += 1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    computerScore += 1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    manScore += 1;
  } else if (playerSelection === computerSelection) {
    // return 'Draw';
  }
}

/*Choices values*/
// let playerSelection = 'Rock';
let playerSelection = undefined;

rock.addEventListener('click', () => {
  playerSelection = 'Rock';
  getComputerChoice();
  game();
});
paper.addEventListener('click', () => {
  playerSelection = 'Paper';
  getComputerChoice();
  game();
});
scissors.addEventListener('click', () => {
  playerSelection = 'Scissors';
  getComputerChoice();
  game();
});

let computerSelection = getComputerChoice();

// console.log(playerSelection, computerSelection);

function game() {
  playRound(playerSelection, computerSelection);
  // console.log('man ' + manScore);
  manScoreText.innerText = `${manScore}`;
  // console.log('computer ' + computerScore);
  computerScoreText.innerText = `${computerScore}`;
}

let result = game();
console.log(result);
