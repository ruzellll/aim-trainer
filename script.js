let score = 0;
let time = 30;
let maxTime = 0;

function randomPosition() {
  let screenWidth = window.innerWidth;
  let screenHeight = window.innerHeight;
  let targetWidth = document.getElementById('target').offsetWidth;
  let targetHeight = document.getElementById('target').offsetHeight;
  
  let leftPos = Math.floor(Math.random() * (screenWidth - targetWidth));
  let topPos = Math.floor(Math.random() * (screenHeight - targetHeight));
  
  document.getElementById('target').style.left = leftPos + 'px';
  document.getElementById('target').style.top = topPos + 'px';
}

function updateScore() {
  score++;
}

function updateTimer() {
  time--;
  document.getElementById('timer').innerText = time + ' sec/s';

  if (time === maxTime) {
    clearInterval(timerInterval);
    document.getElementById('target').style.visibility = "hidden";
    document.getElementById('finalScore').innerText = score;
    document.getElementById('restartPrompt').style.visibility = "visible";
  }
}

function incrementScore() {
  updateScore();
  randomPosition();
}

document.getElementById('target').addEventListener('click', incrementScore);
randomPosition();
let timerInterval;

function startGame(){
  timerInterval = setInterval(updateTimer, 1000);
  document.getElementById('target').style.visibility = "visible";
  document.getElementById('startPrompt').style.visibility = "hidden";
}

function restartGame(){
  document.getElementById('restartPrompt').style.visibility = "hidden";
  document.getElementById('startPrompt').style.visibility = "visible";
  document.getElementById('timer').innerText = '30 sec/s';

  score = 0;
  time = 30;
}

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('restartBtn').addEventListener('click', restartGame);
