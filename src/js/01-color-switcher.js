const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStop.disabled = true;

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick(event) {
  event.target.disabled = true;
  btnStop.removeAttribute('disabled');
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnStopClick(event) {
  btnStart.removeAttribute('disabled');
  event.target.disabled = true;
  clearInterval(timerId);
}
