/* 
Question 1: Write a function named countUpwardsByThree that has no parameters. 
In this function, use a for loop or while loop to count from 0 to 30 by 3, 
and output each number to the terminal as the loop counts (print 0, print 3, print 6, …, print 30). 
Call this function once.
*/

function countUpwardsByThree() {
    for (var number = 0; number <= 30; number += 3) { // This loop runs 11 times
        console.log(number);
    }
}

countUpwardsByThree(); // Will print 0, 3, 6, ..., 30 to the terminal

/* 
Question 2:
Write a function named guessMyFavoriteNumber that takes in one parameter named guess. 
In the function, output “You guessed my favorite number!” to the terminal if guess is equal 
to your favorite number (you pick this number), and print out “Try again!” otherwise. 
Call this function multiple times.
*/

function guessMyFavoriteNumber(guess) {
    if (guess == 3) {
        console.log("You guessed my favorite number!");
    } else {
        console.log("Try again!");
    }
}
guessMyFavoriteNumber(3); // Correct guess
guessMyFavoriteNumber(9); // Incorrect guess
guessMyFavoriteNumber(-1); // Incorrect guess

/*
Question 3:
Write a function named convertNumberToDay that takes one parameter named number. 
In the function, use a switch statement to output the day of the week associated with numbers 
from 0 to 6 to the terminal (if number is 0 then  output Sunday, if number is 1 then output Monday, etc.). 
Call this function 7 times for each number from 0 to 6.
*/

function convertNumberToDay(number) {
    switch (number) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log("This number doesn't convert to a day of the week.");
    }
}
convertNumberToDay(0); // Sunday - case 0
convertNumberToDay(1); // Monday - case 1
convertNumberToDay(2); // Tuesday - case 2
convertNumberToDay(3); // Wednesday - case 3
convertNumberToDay(4); // Thursday - case 4
convertNumberToDay(5); // Friday - case 5
convertNumberToDay(6); // Saturday - case 6
convertNumberToDay(7); // Not a valid number - default case