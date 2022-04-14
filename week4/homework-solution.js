/*
Question 1: Write a function named powersOfThree that prints out the powers of three up to 3⁹ 
(example: 1, 3, 9, …, 19683) using a for loop. Pick your favorite number out of all of these 
powers of three and also print out “This is my favorite power of three!” when your favorite 
power of three prints. Use a timeout to call this function after waiting 3 seconds.
*/
function powersOfThree() {
    for (var num = 1; num <= 19683; num *= 3) {
        console.log(num);
        if (num == 3) {
            console.log("This is my favorite power of three!");
        }
    }
}
setTimeout(powersOfThree, 3000); // prints out all powers of 3 up to 19683 after 3 seconds

/*
Question 2: Write a function named everyTenSeconds that prints out “Hello World!” to the terminal 
every 10 seconds for a total of 2 minutes. Feel free to create any helper functions you need to 
accomplish this. Test your function by calling it once.
*/
function everyTenSeconds() {
    var intervalId = setInterval(console.log, 10000, "Hello World!");
    setTimeout(clearInterval, 130000, intervalId);
}
everyTenSeconds(); // we expect Hello World! to be printed 12 times
