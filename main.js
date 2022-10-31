const selections = document.querySelectorAll('button')
let result = document.querySelector('#result')
let resultScoreUser = document.querySelector('#result-score-user')
let resultScoreComputer = document.querySelector('#result-score-computer')


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
                    resultScoreUser++
    } else {   
        result.textContent = `You lose! ${playerSelection} loses to ${computerSelection}`
        resultScoreComputer++
    }
    console.log(computerSelection)
    console.log(playerSelection);
    console.log(resultScoreUser)
}

