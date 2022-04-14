var currentSecond = 1;

function printNumber() {
    console.log(currentSecond);
    currentSecond++;
}

// print one by one from 1 to 15 every second
var intervalId = setInterval(printNumber, 1000);
setTimeout(clearInterval, 16000, intervalId);