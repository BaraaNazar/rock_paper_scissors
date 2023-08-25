'use strict';

const backstory = [
  '🎮 In the heart of the digital realm, three playful characters emerged...',
  '🤝 The game unfolded, echoing with cheers and excitement...',
  '🏆 As the dust settled, a victor emerged, celebrated by the virtual crowd...',
  '🌐 And so, as the digital sun set, the memory of their epic contest lingered...',
  '😎 Be ready this is the last round',
];

let backstoryIndex = 0;

function displayBackstory() {
  console.log(backstory[backstoryIndex]);
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
    playerChoice = prompt(
      "Hey! This is a fun game on Rock 🤜, Paper 🫲 and Scissors ✌️.\nLet's begin!!! 🏁🏁🏁 \nWrite EITHER Rock, Paper, or Scissors and press 🆗 please!\nYou need to do this 5 times! GOOD LUCK!"
    );

    if (playerChoice === null) {
      // Handle the cancel case
      alert('You clicked Cancel. Please enter a choice.');
    } else {
      playerChoice = playerChoice.toLowerCase().trim(); // Convert to lowercase
      if (!['rock', 'paper', 'scissors'].includes(playerChoice)) {
        alert("Oops! This is not one of 'rock', 'paper', or 'scissors'🧨");
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
    console.log(`Round ${i + 1} - Let the game begin!`);
    const playerSelection = getPlayerChoice();
    const computerSelection = computerPlay();

    console.log(`Player chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult);

    if (roundResult.includes('win')) {
      playerScore++;
    } else if (roundResult.includes('lost')) {
      computerScore++;
    }

    console.log(
      `Player Score : ${playerScore} | Computer Score: ${computerScore}`
    );
    console.log('-------------------------------');
    console.log('-------------------------------');
  }

  if (playerScore > computerScore) {
    console.log('Congratulations! You won the game! 🏆🥇🎉');
  } else if (playerScore < computerScore) {
    console.log('Sorry, you lost the game! 🧨🧨 But it was a nice try!');
  } else {
    console.log('The game ends in a tie! 🤝');
  }
}

game();

//Start a new game
const newGame = prompt('Do you want to play again? (yes or no)🏁🤜🫲✌️');

if (newGame !== null) {
  // Check if newGame is not null
  const lowerCaseNewGame = newGame.toLowerCase();
  if (lowerCaseNewGame === 'yes') {
    location.reload();
  } else {
    console.log('Thank you for playing!');
  }
} else {
  console.log('Thank you for playing!');
}
