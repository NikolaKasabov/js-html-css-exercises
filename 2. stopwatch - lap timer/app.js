const minutesEl = document.querySelector('.clock .minutes');
const secondsEl = document.querySelector('.clock .seconds');
const hundredthsEl = document.querySelector('.clock .hundredths');
const startBtn = document.querySelector('.buttons .start');
const stopBtn = document.querySelector('.buttons .stop');
const resetBtn = document.querySelector('.buttons .reset');

let timeInHundredths = 0;
let intervalId = null;

startBtn.addEventListener('click', startClickHandler);
stopBtn.addEventListener('click', stopClickHandler);
resetBtn.addEventListener('click', resetClickHandler);

function startClickHandler() {
  intervalId = setInterval(() => {
    timeInHundredths++;
    updateClock();
  }, 10);
}

function stopClickHandler() {
  if (intervalId) {
    clearInterval(intervalId);
  }
}

function resetClickHandler() {

}

function getTime() {
  let minutes = Math.floor(timeInHundredths / 6000);
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  let seconds = Math.floor((timeInHundredths / 100) % 60);
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  let hundredths = timeInHundredths % 100;
  if (hundredths < 10) {
    hundredths = '0' + hundredths;
  }

  return {
    minutes,
    seconds,
    hundredths,
  };
}

function updateClock() {
  const { minutes, seconds, hundredths } = getTime();

  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
  hundredthsEl.innerText = hundredths;
}
