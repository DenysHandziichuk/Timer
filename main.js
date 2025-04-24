let countdown;
let totalTimeInSeconds;
let isPaused = false;

document.getElementById('setTimerButton').addEventListener('click', function (event) {
  event.preventDefault();
  clearInterval(countdown);
  
  let seconds = parseInt(document.getElementById('seconds').value) || 0;
  let minutes = parseInt(document.getElementById('minutes').value) || 0;
  let hours = parseInt(document.getElementById('hours').value) || 0;

  totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalTimeInSeconds <= 0) {
    alert("Please enter a valid time!");
    return;
  }

  isPaused = false;
  document.getElementById('pauseButton').textContent = 'Pause';
  startCountdown();
});

document.getElementById('resetButton').addEventListener('click', function () {
  clearInterval(countdown);
  const counter = document.querySelector('.counter');
  counter.textContent = "00:00:00";
  isPaused = false;
  document.getElementById('pauseButton').textContent = 'Pause';
});

document.getElementById('pauseButton').addEventListener('click', function () {
  isPaused = !isPaused;
  this.textContent = isPaused ? 'Resume' : 'Pause';

  if (isPaused) {
    clearInterval(countdown);
  } else {
    startCountdown();
  }
});

function startCountdown() {
  const counter = document.querySelector('.counter');
  clearInterval(countdown);
  
  countdown = setInterval(() => {
    let hrs = Math.floor(totalTimeInSeconds / 3600);
    let mins = Math.floor((totalTimeInSeconds % 3600) / 60);
    let secs = totalTimeInSeconds % 60;

    counter.textContent = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

    totalTimeInSeconds--;

    if (totalTimeInSeconds < 0) {
      clearInterval(countdown);
      counter.textContent = "Time's up!";
    }
  }, 1000);
}