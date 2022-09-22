let getComputerChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  let numberPicker = Math.floor(Math.random() * choices.length - 1);
  return choices[numberPicker]
}