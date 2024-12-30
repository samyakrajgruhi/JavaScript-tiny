// Score to Display Wins, Lossess and Ties //

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

// Replaced onclick with addEventListener to the buttons for choice buttons(rock,paper,scissors) //

document.querySelector('.js-rock-button').addEventListener('click',()=>{
    playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
    playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
    playGame('scissors');
});

// Play Game with KeyBoard [r = rock, p = paper, s = scissors] //
 
document.body.addEventListener('keydown',(event)=>{
    if(event.key === 'r'){
        playGame('rock');
    } else if(event.key === 'p'){
        playGame('paper');
    } else if(event.key === 's'){
        playGame('scissors');
    }
})

// Function to Update Score Display

updateScoreElement();

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

// Function To Get Result //

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';
    document.querySelector('.js-result').innerHTML = result;

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.';
        } else if (computerMove === 'paper') {
            result = 'You win.';
        } else if (computerMove === 'scissors') {
            result = 'Tie.';
        }
        

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.';
        } else if (computerMove === 'paper') {
            result = 'Tie.';
        } else if (computerMove === 'scissors') {
            result = 'You lose.';
        }
        
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.';
        } else if (computerMove === 'paper') {
            result = 'You lose.';
        } else if (computerMove === 'scissors') {
            result = 'You win.';
        }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML = `You <img src="/RPS GAME/images/${playerMove}-emoji.png">  <img src="/RPS GAME/images/${computerMove}-emoji.png"> Computer`;
}

// Function to get Computer's Random Move //

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }

    return computerMove;
}

// Replaced onclick with addEventListener for auto play and Reset Score buttons //

document.querySelector('.reset-button').addEventListener('click',()=>{
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    updateScoreElement();
    localStorage.removeItem('score');
});


document.querySelector('.auto-play').addEventListener('click',()=>{
    autoPlay();
});


// Function For Auto-Play // 

let isAutoPlaying = false;
let intervalID;

function autoPlay(){
    if(!isAutoPlaying){
        intervalID = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
        },1000);
        isAutoPlaying = true;
        document.querySelector('.auto-play').innerHTML = 'Stop AutoPlay';
    } else{
        clearInterval(intervalID);
        isAutoPlaying = false;
        document.querySelector('.auto-play').innerHTML = 'Start AutoPlay';
    }
}