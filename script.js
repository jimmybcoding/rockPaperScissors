const buttons = document.querySelectorAll('#buttons');
let userScore = 0;
let compScore = 0;
let tieGames = 0;

for (const button of buttons) {
  button.addEventListener('click', function() {
    let playaChoice = this.value;
    console.log(playaChoice);
    const compChoices = ["rock", "paper", "scissors"];
    const compChoice = compChoices[Math.floor(Math.random() * compChoices.length)];
    console.log(compChoice);
    playRound(playaChoice, compChoice);
    updateScore();
    winner();
    updateScore();
  });
}

function playRound(playaChoice, compChoice) {
    if (playaChoice === compChoice) {
        return tieGames++;
    } else if (playaChoice === "rock") {
        return compChoice === "paper" ? compScore++ : userScore++;
    } else if (playaChoice === "paper") {
        return compChoice === "scissors" ? compScore++ : userScore++;
    } else if (playaChoice === "scissors") {
        return compChoice === "rock" ? compScore++ : userScore++;
    }
}

function updateScore () {
    document.getElementById("userScore").innerText = "Playa Score: " + userScore;
    document.getElementById("compScore").innerText = "Computer Score: " + compScore;
    document.getElementById("ties").innerText = "Tie Games: " + tieGames;
}

function winner () {
    if (userScore === 5) {
        alert (`Playa Defeats Computer by a score of ${userScore} to ${compScore}`);
        return userScore = 0, compScore = 0, tieGames = 0;
    } else if (compScore === 5) {
        alert (`Computer Defeats Playa by a score of ${compScore} to ${userScore}`);
        return userScore = 0, compScore = 0, tieGames = 0;
    } else {
        return;
    }
}