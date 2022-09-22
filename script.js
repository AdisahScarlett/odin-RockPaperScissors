const getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const choicePicker = Math.floor(Math.random() * choices.length);
  return choices[choicePicker].toLowerCase();
}

const playRound = (playerSelection, computerSelection) => {
  playerSelection.toLowerCase()
  computerSelection.toLowerCase()

  if (playerSelection === "rock" && computerSelection === "paper") {
    return `You Lose! Paper beats Rock`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return `You Lose! Scissors beats Paper`; 
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return `You Lose! Rock beats Scissors`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You Win! Paper beats Rock`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return `You Win! Scissors beats Paper`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You Win! Rock beats Scissors`;
  } else {
    return `You are both tied`;
  }

}

const game = () => {
  for(let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?")
    console.log(playRound(playerSelection, getComputerChoice()))
  }
}