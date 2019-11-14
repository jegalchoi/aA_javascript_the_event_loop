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

/*
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
*/

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
  };
}

//addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));


function askIfGreaterThan(el1, el2, callback) {
  let status;
  
  reader.question(`Is ${el1} larger than ${el2}? `, (answer) => {
    status = (answer == 'yes') ? true : false;
    callback(status);  
  });
}

/*
askIfGreaterThan(1, 2, answer => {
  console.log(`${answer}`)
  reader.close();
});
*/


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i == arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  } else if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], isGreaterThan => {
      if (isGreaterThan) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        console.log(`${arr}`);
        madeAnySwaps = true;
      };

      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  };
}

/*
function outerBubbleSortLoop(madeAnySwaps) {
  console.log(`Inside outer bubble sort: ${madeAnySwaps}`);
  reader.close();
}

innerBubbleSortLoop([4, 3, 2, 1], 0, false, outerBubbleSortLoop);
*/

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps == true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else if (madeAnySwaps == false) {
      sortCompletionCallback(arr);
    };
  }

  outerBubbleSortLoop(true);
}

/*
absurdBubbleSort([3,2,1], function(arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
*/


class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
  console.log("Turning on " + this.name);
}

const lamp = new Lamp();

Function.prototype.myBind = function(context) {
  return () => this.apply(context);
}

//turnOn();

//const boundTurnOn = turnOn.bind(lamp);
//const myBoundTurnOn = turnOn.myBind(lamp);

//boundTurnOn();
//myBoundTurnOn();
