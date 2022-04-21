/*
Question 1: Use a for-loop to make a 2D array of Car objects that is 10 rows by 10 columns. 
Each Car object should have the following properties: model, color, year, mpg, and id. 
Each Car object should have the same values for model, color, year, and mpg but different values 
for id that increment with each Car object made. For example, the first car made should have id = 1, 
the second car made should have id = 2, etc.
*/

// Car object constructor
function Car(model, color, year, mpg, id) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.mpg = mpg;
    this.id = id;
}

var allCars = [];
for (var i = 0; i < 10; i++) {
    var cars = [];
    for (var j = 0; j < 10; j++) {
        cars.push(new Car("Ford Fusion", "red", 2016, 27.0, i * 10 + j + 1));
    }
    allCars.push(cars);
}

/*
Question 2: Write a function getCarsBetweenIds that takes two parameters: idMin and idMax. 
Return a new array of the Car objects that have an id between idMin and idMax (idMin <= id <= idMax). 
Before returning the array, change all the Car objects’ color property to “blue”. Test your function 
by calling it 3 times and printing the results to the terminal.
*/
function getCarsBetweenIds(idMin, idMax, allCars) {
    var numCars = allCars.length * allCars[0].length;
    if (idMin < 1) {
        console.log("Invalid idMin value - idMin must be at least 1.");
        return [];
    }
    if (idMax > numCars) {
        console.log("Invalid idMax value - idMax must be at most " + numCars + ".");
        return [];
    }
    var cars = [];
    // obtain starting row and starting column values
    var currentRow = Math.floor(idMin / 10);
    if (idMin % 10 == 0) {
        currentRow--;
    }
    var currentCol = (idMin - 1) % 10;
    var currentCarId = allCars[currentRow][currentCol].id;
    // iterate until we have obtained all of the cars within the range of ids
    while (currentCarId <= idMax) {
        var car = allCars[currentRow][currentCol];
        car.color = "blue";
        cars.push(car);
        // update current row and current column values
        if (currentCol % 9 == 0 && currentCol != 0) {
            currentCol = 0;
            currentRow++;
        } else {
            currentCol++;
        }
        currentCarId++;
    }
    return cars;
}
console.log(getCarsBetweenIds(64, 72, allCars));
console.log(getCarsBetweenIds(1, 100, allCars));
console.log(getCarsBetweenIds(33, 42, allCars));
console.log(getCarsBetweenIds(-1, 100, allCars)); // invalid idMin
console.log(getCarsBetweenIds(1, 200, allCars)); // invalid idMax
