class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
    }, 1000);
  }

  getMinutes() {
    let currentMinute = 0;
    currentMinute = Math.trunc(this.currentTime / 60);
    return currentMinute;
  }

  getSeconds() {
    let currentSecond = 0;
    currentSecond = this.currentTime % 60;
    return currentSecond;
  }

  twoDigitsNumber(value) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return `${value}`;
    }
  }

  stopClick() {
    clearInterval(this.intervalId);
    return this.intervalID;
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick() {
    let currentMinute = this.getMinutes();
    let currentSecond = this.getSeconds();
    return this.twoDigitsNumber(currentMinute) + ":" + this.twoDigitsNumber(currentSecond);
  }
}