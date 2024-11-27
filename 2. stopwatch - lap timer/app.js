const minutesEl = document.querySelector('.clock .minutes');
const secondsEl = document.querySelector('.clock .seconds');
const hundredthsEl = document.querySelector('.clock .hundredths');

let timeInHundredths = 0;

setInterval(() => { 
  timeInHundredths++;
  updateClock();
}, 10);

function updateClock() {
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

  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
  hundredthsEl.innerText = hundredths;
}
