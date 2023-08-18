const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#timeleft');
const score = document.querySelector('#scoring');

let result = 0;
let hitPosition;
let currentTime =60;
let timerId;

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
    timerId = null;
    timerId = setInterval(randomSquare, 500);
}
moveMole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;

    if(currentTime == 0){
        clearInterval(countDownTimer);
        alert('GAME OVER! Your Score is ' + result);
        clearInterval(timerId);
    }
}

let countDownTimer = setInterval(countDown,1000);