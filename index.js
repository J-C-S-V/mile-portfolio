/*Scores*/
let manScore = 0;
let computerScore = 0;

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
let playerSelection = 'Rock';
let computerSelection = getComputerChoice();
const manScoreText = document.querySelector('.manScore');
const computerScoreText = document.querySelector('.computerScore');
const rock = document.querySelector('#rock');

// console.log(playerSelection, computerSelection);

function game() {
  playRound(playerSelection, computerSelection);
  // console.log('man ' + manScore);
  manScoreText.innerText = `${manScore}`;
  computerScoreText.innerText = `${computerScore}`;
  // console.log('computer ' + computerScore);
}

let result = game();
console.log(result);

rock.addEventListener('click', game);
