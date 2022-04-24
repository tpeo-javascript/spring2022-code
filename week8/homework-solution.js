/*
Question 1: Write a function, returnSquaredNumbers, that takes in one parameter, numbers, which is an array of numbers. 
In this function, return a new array that contains all of the numbers in numbers squared. For example, 
returnSquaredNumbers([1, 2, 3]) should return [1, 4, 9]. Use map() with an arrow function to write this function. 
Test your function by calling it at least 3 times with different inputs.
*/
function returnSquaredNumbers(numbers) {
    return numbers.map(number => number * number);
}
console.log(returnSquaredNumbers([1, 2, 3]));
console.log(returnSquaredNumbers([-3, -2, -1, 0, 1, 2, 3]));
console.log(returnSquaredNumbers([3, 6, 9, 12, 15, 18, 21, 24, 27]));

/*
Question 2: Write a loop that creates 10 Car objects via a constructor and stores them in an array. 
All 10 Car objects should have the same values for the properties model, year, and color. Then, using 
literal object syntax, create an object that contains one property, mpg, set to a value of 30.0. Finally, 
using the spread operator, merge each Car object with the literal object that contains the mpg property 
and store the resulting objects in a new array to print out.
*/

// Car object constructor
function Car(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
}

var cars = [];
for (let i = 0; i < 10; i++) {
    cars.push(new Car("Ford Fusion", 2019, "blue"));
}

const mpg = {
    mpg: 30.0
}

for (let i = 0; i < cars.length; i++) {
    // using the spread operator to merge objects
    cars[i] = {...cars[i], ...mpg};
}
console.log(cars);