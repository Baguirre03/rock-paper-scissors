const selections = document.querySelectorAll('button')
let result = document.querySelector('#result')
const gameOverAppear = document.querySelector('.gameOverAppear')
const restartGameButton = document.querySelector('#restart')
const gameOver = document.querySelector('#gameOver')
const rockButton = document.querySelector('#Rock')
const paperButton = document.querySelector('#Paper')
const scissorsButton = document.querySelector('#Scissors')


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
                    checkGameScore();
                    return;
    } else {   
        result.textContent = `You lose! ${playerSelection} loses to ${computerSelection}`
        cScore++
        updateScore();
        checkGameScore();
        return;
    }
}

function checkGameScore(){ 
    if (uScore === 5) {
        document.getElementById('reveal').style.display='flex';
        gameOver.textContent = "Game over, you won!!! "
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        restartGameButton.disabled = false;
    } else if (cScore === 5) {
        document.getElementById('reveal').style.display='flex';
        gameOver.textContent = "Game over, the computer won!!! ";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        restartGameButton.disabled = false;
    } else {
        return;
    }
}

function addSelectionResult() {
    
}

//reload page with button
restartGameButton.addEventListener('click', () => {
        location.reload();
    })