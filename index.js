function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];

  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  const choices = ["rock", "paper", "scissors"];

  if (!choices.includes(playerSelection)) {
    console.log("invalid section select rock, paper, scissors");
  }

  if (playerSelection === computerSelection) {
    return " It's  a tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `You Win  ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose  ${computerSelection} beats ${playerSelection}`;
  }
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i < 5; i++) {
    const playerSelection = prompt("enter guess! rock, paper or scissors");

    computerSelection = getComputerChoice();

    console.log(`computer choose: ${computerSelection}`);

    const result = playRound(playerSelection, computerSelection);

    console.log(result);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  console.log("Player Score:", playerScore);
  console.log("Computer Score:", computerScore);

  if (playerScore > computerScore) {
    console.log("congrats you win");
  } else if (computerScore > playerScore) {
    console.log("Computer wins");
  } else {
    console.log("its a  tie");
  }
}

playGame();
