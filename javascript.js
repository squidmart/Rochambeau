let humanScore = 0;
let computerScore = 0;
let gameStarted = false; // Add a flag to track if the game has started

function playRound(humanChoice, computerChoice) {
  let roundResult = "";

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    roundResult = "You win this round!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    roundResult = "You lose this round!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    roundResult = "You win this round!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    roundResult = "You lose this round!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    roundResult = "You win this round!";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    roundResult = "You lose this round!";
  } else if (humanChoice === computerChoice) {
    roundResult = "It's a tie this round!";
  }

  gameStarted = true; 
  return roundResult;
}


function updateAnnouncement(humanChoice, computerChoice, roundResult) {
  const announcementDiv = document.querySelector("#announcement");
  if (announcementDiv) {
      // Clear previous content by removing all child nodes
      while (announcementDiv.firstChild) {
          announcementDiv.removeChild(announcementDiv.firstChild);
      }

      if (gameStarted) {
          const roundInfo = document.createElement("p");
          roundInfo.textContent = `You chose ${humanChoice}, Computer chose ${computerChoice}. ${roundResult}`;
          announcementDiv.appendChild(roundInfo);
      }

      const scoreInfo = document.createElement("p");
      scoreInfo.textContent = `Player One: ${humanScore} wins, Computer: ${computerScore} wins`;
      announcementDiv.appendChild(scoreInfo);
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameStarted = false; // Reset the flag
  updateAnnouncement("", "", "");
}

function playGame() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const humanChoice = button.id;
      const possibleOptions = ["rock", "paper", "scissors"];
      const computerChoice = possibleOptions[Math.floor(Math.random() * possibleOptions.length)];

      const roundResult = playRound(humanChoice, computerChoice);
      updateAnnouncement(humanChoice, computerChoice, roundResult);
    });
  });
}

// Initial setup
playGame();
updateAnnouncement("", "", "");

const resetButton = document.querySelector("#resetButton");
if (resetButton) {
  resetButton.addEventListener("click", resetGame);
} else {
  console.error("Reset button not found.");
}