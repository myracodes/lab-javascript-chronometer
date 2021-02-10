const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  setInterval(() => {
    minDec.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes()).split()[0];
    minUni.textContent = chronometer.twoDigitsNumber(chronometer.getMinutes()).split()[1];
    secDec.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds()).split()[0];
    secUni.textContent = chronometer.twoDigitsNumber(chronometer.getSeconds()).split()[1];
  }, 1000);
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('stop')) {
    btnLeft.textContent = "START";
    btnRight.textContent = "RESET";
    chronometer.startClick();
  } else {
    btnLeft.textContent = "STOP";
    btnRight.textContent = "SPLIT";
    chronometer.stopClick();
  }
  btnLeft.classList.toggle("stop");
  btnRight.classList.toggle('split');
  printTime();
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

});