// step 1 - pseudocode 
// INPUT human selection - must be typed in, not case sensitive. must have exit loop if error
// INPUT computer selection
// CALCULATE winner
// REPEAT SEQUENCE 5x
// CALCULATE final winner
// OUTPUT final winner

// // Step 2: Write the logic to get the computer choice

// function getComputerChoice () {
//   const possibleOptions =['rock', 'paper', 'scissors'];
//   return possibleOptions[Math.floor(Math.random()*possibleOptions.length)];
// }
// console.log("The Computer chose "+getComputerChoice());


// // // Step 3: Write the logic to get the human choice

// function getHumanChoice (){
//   return prompt('Please input Rock, Paper or Scissors', '');
// }
// console.log('You chose '+getHumanChoice());


// Step 4: Declare the players score variables

let humanScore =0;
let computerScore =0;
let humanChoice;
let computerChoice;


function playGame (playRound){
  for (let i =1; i<6; i++){
    const possibleOptions =['rock', 'paper', 'scissors'];
    computerChoice = possibleOptions[Math.floor(Math.random()*possibleOptions.length)];
    console.log('Computer chose '+computerChoice);
    humanChoice = prompt('Please input Rock, Paper or Scissors').toLowerCase();
    console.log('You chose '+humanChoice);


    function playRound(humanChoice,computerChoice){
      if (humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log('You win! '+ humanChoice+ ' beats '+computerChoice);
        humanScore++;
      }
      else if (humanChoice == 'rock' && computerChoice == 'paper') {
        console.log('You lose! '+ humanChoice+ ' beats '+computerChoice);
        computerScore++;
      }
      else if (humanChoice== 'scissors' && computerChoice== 'paper'){
        console.log('You win! '+ humanChoice+ ' beats '+computerChoice);
        humanScore++;
      }
      else if (humanChoice== 'scissors' && computerChoice=='rock'){
        console.log ('You lose! '+ humanChoice+ ' beats '+computerChoice);
        computerScore++;
      }
      else if (humanChoice=='paper' && computerChoice=='rock'){
        console.log('You win! '+ humanChoice+ ' beats '+computerChoice);
        humanScore++;
      }
      else if (humanChoice== 'paper' && computerChoice=='scissors'){
        console.log ('You lose! '+ humanChoice+ ' beats '+computerChoice);
        computerScore++;
      }
      else if (humanChoice==computerChoice){
        console.log ('You tie with the computer');
      }
      else {
      console.log ('You didn\'t input the right option!');
      }
      console.log('Your score '+humanScore);
      console.log('Computer score '+computerScore);
    }
   

playRound(humanChoice,computerChoice);
  

  if (humanScore==computerScore){
    console.log('Round '+i+ ' You tie!');
  }
  else if (humanScore<computerScore){
      console.log('Round '+i+ ' You lose!');
    }
    else {
      console.log('Round '+i+ ' You win!');
    }
  }
}

playGame();


// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.