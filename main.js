const selections = document.querySelectorAll('button')
let result = document.querySelector('#result')
let uScore = 0
let cScore = 0

const updateScore = () => {
    const computerScore = document.querySelector('.computerScore')
    const userScore = document.querySelector('.userScore')
    computerScore.textContent = cScore
    userScore.textContent = uScore
}


const myArray = ["Rock", "Paper", "Scissors"]
function getComputerChoice(){
    return myArray[Math.floor(Math.random() * myArray.length)];
}


selections.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id)
    })
})

function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        result.textContent = `You both chose ${computerSelection}, round tied!`
    } else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
                 playerSelection == "Paper" && computerSelection == "Rock" ||
                 playerSelection == "Scissors" && computerSelection == "Paper") {
                    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`
                    uScore++
                    updateScore();
                    return;
    } else {   
        result.textContent = `You lose! ${playerSelection} loses to ${computerSelection}`
        cScore++
        updateScore();
        return;
    }
    console.log(computerSelection)
    console.log(playerSelection);
}

function checkGameScore() {
    if (uScore === 5 || cScore === 5) {
        
    }
}

