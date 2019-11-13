class Clock {
  constructor() {
    this.hours = new Date().getHours();
    this.minutes = new Date().getMinutes();
    this.seconds = new Date().getSeconds();  

    this.printTime();
    setInterval(function(){clock._tick(); }, 1000);
  }
  
  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;
    this.printTime();
  }
}

//const clock = new Clock();

