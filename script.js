let userScore = 0;
let computerScore = 0;
const message = document.querySelector(".message");
const user_score = document.querySelector(".Scores_p");
const comp_score = document.querySelector(".Scores_c");
const choices = document.querySelectorAll(".choices img");
// console.log(choices);
const computer_Choice = () => {
  const arr = ["rock", "paper", "scissor"];
  return arr[Math.floor(Math.random() * 3)];
};
const drawGame = () => {
  console.log("game draw");
  message.innerText = "Game was draw play again!!!!!";
  message.style.backgroundColor = "cadetblue";
};
const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin == true) {
    userScore++;
    user_score.innerText = userScore;
    console.log("you won");
    message.innerText = `you won! ${userChoice} beats ${computerChoice}`;
    message.style.backgroundColor = "green";
  } else {
    computerScore++;
    comp_score.innerText = computerScore;
    console.log("you loose");
    message.innerText = `you loose! ${computerChoice} beats ${userChoice}`;
    message.style.backgroundColor = "red";
  }
};
const playgame = (userChoice) => {
  console.log("U=", userChoice);
  const computerChoice = computer_Choice();
  console.log("C=", computerChoice);

  if (userChoice == computerChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = computerChoice === "scissor" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
    // console.log("choice was clicked",userChoice);
  });
});