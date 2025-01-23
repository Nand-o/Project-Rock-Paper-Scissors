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

function playRound() {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    if (humanSelection === "rock") {
        if (humanSelection && computerSelection === "rock") {
            console.log("Tie! Your choice it's same");
            return null
        } else if (humanSelection && computerSelection === "paper") {
            console.log("You lose! Paper beats Rock");
            return false
        } else {
            console.log("You win! Rock beats Scissors");
            return true
        }

    } else if (humanSelection === "paper") {
        if (humanSelection && computerSelection === "rock") {
            console.log("You win! Paper beats Rock")
            return true
        } else if (humanSelection && computerSelection === "paper") {
            console.log("Tie! Your choice it's same");
            return null
        } else {
            console.log("You lose! Scissors beats Paper");
            return false
        }
    } else if (humanSelection === "scissors") {
        if (humanSelection && computerSelection === "rock") {
            console.log("You lose! Rock beats Scissors")
            return false
        } else if (humanSelection && computerSelection === "paper") {
            console.log("You win! Scissors beats Paper");
            return true
        } else {
            console.log("Tie! Your choice it's same");
            return null
        }
    } else {
        console.log("This round will be count a tie")
        return window.prompt("Put the right choice!", "Okay my bad");
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}`)
        let score = playRound();

        if (score === true) {
            humanScore += 1;
        } else if (score === false) {
            computerScore += 1;
        }
    }

    console.log("=============================================")
    console.log("Final Score");
    console.log(`Your Score = ${humanScore}`);
    console.log(`Computer Score = ${computerScore}`)
    console.log(`Draw = ` + (5 - humanScore - computerScore));
    console.log("=============================================")


    if (humanScore > computerScore) {
        console.log("You win this game! Congrats!");
    } else if (humanScore === computerScore) {
        console.log("No one win lol. Draw!");
    } else {
        console.log("You lose this game! Loser");
    }
}


play = window.prompt("Lets play Rock Paper Scissors Game! (Just Click Oke :) )", "Rock Paper Scissors Game by Nando");
console.log(play);
playGame()