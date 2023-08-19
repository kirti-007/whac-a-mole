const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#timeleft');
const score = document.querySelector('#scoring');
const btn = document.querySelector('.button');

let result;
let hitPosition;
let currentTime;
let timerId;
let countDownTimer;

btn.addEventListener('click', startgame);
function startgame(){
        result = 0;
        currentTime = 60;

        score.textContent = result;
        timeLeft.textContent = currentTime;

        clearInterval(timerId);
        clearInterval(countDownTimer);
        moveMole();
        timeout();
        
}


function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
}

squares.forEach(square => {
    square.addEventListener('mouseover' ,() => {
        if(square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole(){
    timerId = setInterval(randomSquare, 500);
}


function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimer);
        alert('GAME OVER! Your Score is ' + result);
        clearInterval(timerId);
    }
}
function timeout(){
    countDownTimer = setInterval(countDown,1000);
}




