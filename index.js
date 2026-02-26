function playGame() {
  let humanscore = { score: 0 };
  let computerScore = { score: 0 };

  function getComputerChoice() {
    const words = ["rock", "paper", "scissors"];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord;
  }

  function getHumanChoice() {
    let play = window.prompt("Choose one; rock, paper, scissors: ");
    if (play) {
      play = play.toLowerCase().trim();
      console.log(play);
      return play;
    }
  }
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const result = playRound(humanSelection, computerSelection);
  console.log(result);

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "rock") {
      return "You win, paper beats rock.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      return "You lose, paper beats rock.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      return "You win, scissors beat paper";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      return "You lose, scissors beats paper";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      return "you win, rock beats scissors";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      return "You lose, rock beats scissors.";
    } else {
      return "its a tie.";
    }
  }
}

playGame();
