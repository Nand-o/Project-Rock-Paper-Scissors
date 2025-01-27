let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    let computerNumber = Math.floor(Math.random() * 100) + 1;
    let computerChoice = "rock";

    if (computerNumber >= 1 && computerNumber <= 30) {
        return computerChoice = "rock";
    } else if (computerNumber > 30 && computerNumber <= 60) {
        return computerChoice = "paper";
    } else {
        return computerChoice = "scissors";
    }
}

function getHumanChoice() {
    let humanInput = prompt("What's is your choice? (Rock, Paper, Scissors) ");

    return humanInput.toLowerCase();
}

function playRound(computerSelection, humanSelection) {

    if (humanSelection === "rock") {
        if (humanSelection && computerSelection === "rock") {
            addResult("Tie! Your choice it's same");
            return null
        } else if (humanSelection && computerSelection === "paper") {
            addResult("You lose! Paper beats Rock");
            return false
        } else {
            addResult("You win! Rock beats Scissors");
            return true
        }

    } else if (humanSelection === "paper") {
        if (humanSelection && computerSelection === "rock") {
            addResult("You win! Paper beats Rock")
            return true
        } else if (humanSelection && computerSelection === "paper") {
            addResult("Tie! Your choice it's same");
            return null
        } else {
            addResult("You lose! Scissors beats Paper");
            return false
        }
    } else if (humanSelection === "scissors") {
        if (humanSelection && computerSelection === "rock") {
            addResult("You lose! Rock beats Scissors")
            return false
        } else if (humanSelection && computerSelection === "paper") {
            addResult("You win! Scissors beats Paper");
            return true
        } else {
            addResult("Tie! Your choice it's same");
            return null
        }
    } else {
        console.log("This round will be count a tie")
        return window.prompt("Put the right choice!", "Okay my bad");
    }
}

function addResult(text) {
    const result = document.querySelector(".log");

    const h = document.querySelector(".rtext");
    h.textContent = text;
    h.style.cssText = "text-align: center;";

    result.appendChild(h);
}

function gameResult(score) {
    const human = document.querySelector(".human-score");
    const computer = document.querySelector(".computer-score");

    if (score === true) {
        humanScore += 1;
        human.textContent = "Human : " + humanScore;
    } else if (score === false) {
        computerScore += 1;
        computer.textContent = "Computer : " + computerScore;
    }
}

// function playGame() {
//     for (let i = 1; i <= 5; i++) {
//         console.log(`Round ${i}`)
//         let score = playRound();

//         if (score === true) {
//             humanScore += 1;
//         } else if (score === false) {
//             computerScore += 1;
//         }
//     }

//     console.log("=============================================")
//     console.log("Final Score");
//     console.log(`Your Score = ${humanScore}`);
//     console.log(`Computer Score = ${computerScore}`)
//     console.log(`Draw = ` + (5 - humanScore - computerScore));
//     console.log("=============================================")


//     if (humanScore > computerScore) {
//         console.log("You win this game! Congrats!");
//     } else if (humanScore === computerScore) {
//         console.log("No one win lol. Draw!");
//     } else {
//         console.log("You lose this game! Loser");
//     }
// }


// play = window.prompt("Lets play Rock Paper Scissors Game! (Just Click Oke :) )", "Rock Paper Scissors Game by Nando");
// console.log(play);
// playGame()

const rock = document.querySelector("#rock");

rock.addEventListener("click", () => {
    const humanSelection = "rock";
    const computerSelection = getComputerChoice();

    let score = playRound(computerSelection, humanSelection);

    if (score === true) {
        gameResult(score);
    } else if (score === false) {
        gameResult(score);
    }

    if (humanScore === 5) {
        const result = document.querySelector(".log");

        const winner = document.createElement("h1");
        winner.textContent = "You win this game! Good Job";
        winner.style.cssText = "text-align: center;";

        result.appendChild(winner);
    } else if (computerScore === 5) {
        const result = document.querySelector(".log");

        const winner = document.createElement("h1");
        winner.textContent = "You lose this game! Loser";
        winner.style.cssText = "text-align: center;";

        result.appendChild(winner);
    }
});

const paper = document.querySelector("#paper");

paper.addEventListener("click", () => {
    const humanSelection = "paper";
    const computerSelection = getComputerChoice();

    let score = playRound(computerSelection, humanSelection);

    if (score === true) {
        gameResult(score);
    } else if (score === false) {
        gameResult(score);
    }

    if (humanScore === 5) {
        const result = document.querySelector(".log");

        const winner = document.createElement("h1");
        winner.textContent = "You win this game! Good Job";
        winner.style.cssText = "text-align: center;";

        result.appendChild(winner);

    } else if (computerScore === 5) {
        const result = document.querySelector(".log");

        const winner = document.createElement("h1");
        winner.textContent = "You lose this game! Loser";
        winner.style.cssText = "text-align: center;";

        result.appendChild(winner);
    }
});

const scissors = document.querySelector("#scissors");

scissors.addEventListener("click", () => {
    const humanSelection = "scissors";
    const computerSelection = getComputerChoice();

    let score = playRound(computerSelection, humanSelection);

    if (score === true) {
        gameResult(score);
    } else if (score === false) {
        gameResult(score);
    }

    if (humanScore === 5) {
        const result = document.querySelector(".log");

        const winner = document.createElement("h1");
        winner.textContent = "You win this game! Good Job";
        winner.style.cssText = "text-align: center;";

        result.appendChild(winner);
    } else if (computerScore === 5) {
        const result = document.querySelector(".log");

        const winner = document.createElement("h1");
        winner.textContent = "You lose this game! Loser";
        winner.style.cssText = "text-align: center;";

        result.appendChild(winner);
    }
});