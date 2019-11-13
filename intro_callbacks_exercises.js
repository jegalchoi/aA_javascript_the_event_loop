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


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Number? ", function (number) {
      const Num = parseInt(number);

      sum += Num;
      console.log(`${sum}`);

      addNumbers(sum, numsLeft - 1, completionCallback);
    })
  } else if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  };
}

//addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
