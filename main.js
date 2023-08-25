'use strict';

const playerChoiceInput = document.querySelector('.player-choice-input').value;
const content = document.querySelector('.content');
const choiceButtom = document.querySelector('.choice-button');
const notify = document.querySelector('.notify');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const results = document.querySelector('.results');
const resultsNum = document.querySelector('.resultsNum');
const backStory = document.querySelector('.backStory');
const round = document.querySelector('.round');

const backstory = [
  '🎮 In the heart of the digital realm, three playful characters emerged...',
  '🤝 The game unfolded, echoing with cheers and excitement...',
  '🏆 As the dust settled, a victor emerged, celebrated by the virtual crowd...',
  '🌐 And so, as the digital sun set, the memory of their epic contest lingered...',
  '😎 Be ready this is the last round',
];

let backstoryIndex = 0;

function displayBackstory() {
  backStory.textContent = backstory[backstoryIndex];
  backstoryIndex++;
}

//Function for computer play(random selection)
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

//Getting user input
function getPlayerChoice() {
  let playerChoice;

  do {
    content.textContent =
      "Hey! This is a fun game on Rock 🤜, Paper 🫲 and Scissors ✌️.\nLet's begin!!! 🏁🏁🏁 \nWrite EITHER Rock, Paper, or Scissors and press 🆗 please!\nYou need to do this 5 times! GOOD LUCK!";
    choiceButtom.addEventListener('click', () => {
      playerChoice = playerChoiceInput;
    });
    if (playerChoice === null) {
      // Handle the cancel case
      notify.textContent = 'You clicked Cancel. Please enter a choice.';
    } else {
      playerChoice = playerChoice.toLowerCase().trim(); // Convert to lowercase
      if (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
        notify.textContent =
          "Oops! This is not one of 'rock', 'paper', or 'scissors'🧨";
      }
    }
  } while (!['rock', 'paper', 'scissors'].includes(playerChoice));

  return playerChoice;
}

// const winningMap = {
//   rock: 'scissors',
//   scissors: 'paper',
//   paper: 'rock'
// }

// function play(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     return "It's a tie! 🤝";
//   }

//   const result = winningMap[playerSelection]

//   if (result === computerSelection) {
//     return "You win"
//   } else {
//     return "Computer wins"
//   }
// }

//Ruling the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie! 🤝";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You win 📣! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `You lost 📣! ${computerSelection} beats ${playerSelection}. Caamon! You can do it better!!!`;
  }
}

//Function for score counting
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    displayBackstory(); // Display backstory at the beginning of each round
    round.textContent = `Round ${i + 1} - Let the game begin!`;
    const playerSelection = getPlayerChoice();
    const computerSelection = computerPlay();

    playerChoice.textContent = `Player chose: ${playerSelection}`;
    computerChoice.textContent = `Computer chose: ${computerSelection}`;

    const roundResult = playRound(playerSelection, computerSelection);
    results.textContent = roundResult;

    if (roundResult.includes('win')) {
      playerScore++;
    } else if (roundResult.includes('lost')) {
      computerScore++;
    }

    resultsNum.textContent = `Player Score : ${playerScore} | Computer Score: ${computerScore}`;
  }

  if (playerScore > computerScore) {
    content.textContent = 'Congratulations! You won the game! 🏆🥇🎉';
  } else if (playerScore < computerScore) {
    content.textContent =
      'Sorry, you lost the game! 🧨🧨 But it was a nice try!';
  } else {
    content.textContent = 'The game ends in a tie! 🤝';
  }
}
game();

//Start a new game
// const playAgain = window.confirm('Do you want to play again? (yes or no)');
// if (playAgain) {
//   location.reload();
// } else {
//   console.log('Thank you for playing!');
// }
