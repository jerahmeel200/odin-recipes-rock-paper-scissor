function getComputerChoice() {
  //    make computer choose random from an array
  const random = Math.floor(Math.random() * 3);
  const choices = ["rock", "paper", "scissors"];
  // return chioces randomly
  return choices[random];
}

function playRound(playerSelection, computerSelection) {
  // convert player selection into lower case
  playerSelection = playerSelection.toLowerCase();
  //  create an array of rock paper scissor
  const choices = ["rock", "paper", "scissors"];
  // return "invalid selection if  player did  not input any from chioces"
  if (!choices.includes(playerSelection)) {
    console.log("invalid section select rock, paper, scissors");
  }

  // check if player selection is  === computer selection return a tie and player selection as what both comp and player returned
  if (playerSelection === computerSelection) {
    return " It's  a tie";
    // proceed to else if  check for senerio when player wins
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    //    return you Win playerSelection beats computer Selection
    return `You Win  ${playerSelection} beats ${computerSelection}`;
  } else {
    // else return you lose  computer Selection beats playerSelection
    return `You Lose  ${computerSelection} beats ${playerSelection}`;
  }
}
//   const userChoice = prompt("enter guess");
//   const playerSelection = userChoice;
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));

function playGame() {
  //  create 2 variebles called  playerScore and computer score and set them to 0 as initial value
  let playerScore = 0;
  let computerScore = 0;

  // loop through round  which is 5 then prompt prompt 5 times
  for (let i = 1; i < 5; i++) {
    const playerSelection = prompt("enter guess! rock, paper or scissors");
    //   pass computerSelection = the random function above ()
    computerSelection = getComputerChoice();

    // console.log player chooses and pass the player selection bactick do the same thing for computer chooses and pass computer selection
    console.log(`player choose: ${playerSelection}`);
    console.log(`computer choose: ${computerSelection}`);
    // create a variable called result and   pass the playround function  and add the two argument
    const result = playRound(playerSelection, computerSelection);
    // console log the result
    console.log(result);

    // increment players score by 1 if it include win if player if player losses computer score increases
    //   if  result includes "Win" increment player score
    if (result.includes("Win")) {
      playerScore++;
      // else if if result  includes "Lose"  increment computer score
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  //    end loop

  // console log computer score and player score with decs
  console.log("Player Score:", playerScore);
  console.log("Computer Score:", computerScore);
  // check if computer or player score is greater or lesser else tie if player score is greater clg  congrats you win else if oposite with conputer score
  if (playerScore > computerScore) {
    console.log("congrats you win");
  } else if (computerScore > playerScore) {
    console.log("Computer wins");
  } else {
    console.log("its a  tie");
  }
}

// Uncomment the line below to start the game
playGame();
