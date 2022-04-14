/*
Question 1: Create a constructor for a Car object. Each Car object should contain the 
following properties: model, year, color, and mpg. Use the constructor to create 3 different 
Car objects. Print out the mpg of each car to the console. 
*/
function Car(model, year, color, mpg) {
    this.model = model;
    this.year = year;
    this.color = color;
    this.mpg = mpg;
}

var prius = new Car("Toyota Prius", 2022, "Red", 30.0);
var fusion = new Car("Ford Fusion", 2013, "Blue", 33.9);
var accord = new Car("Honda Accord", 2010, "Green", 27.3);

console.log(prius.mpg);
console.log(fusion["mpg"]);
console.log(accord.mpg);

/*
Question 2: Create a constructor for a Vehicle object. Each Vehicle object should contain only 
one property: car. Using the 3 Car objects you created previously, create 3 Vehicle objects. 
Print out the mpg of the car property in each Vehicle object.
*/
function Vehicle(car) {
    this.car = car;
}

var priusVehicle = new Vehicle(prius);
var fusionVehicle = new Vehicle(fusion);
var accordVehicle = new Vehicle(accord);

console.log(priusVehicle.car.mpg);
console.log(fusionVehicle["car"].mpg);
console.log(accordVehicle.car["mpg"]);