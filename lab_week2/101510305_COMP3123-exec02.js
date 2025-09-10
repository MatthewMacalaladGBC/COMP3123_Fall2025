// Matthew Macalalad, 101510305, COMP3123, Lab Week 2

//Exercise 1: Rewrite the following code block using ES6 syntax (i.e. const, let, arrow function, etc.)

/*
Sample Code:
function greeter(myArray, counter) {
    var greetText = "Hello ";

    for (var index = 0; index < myArray.length; index++) {
        console.log(greetText + myArray[index]);
    }
}

greeter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);
*/

const greeter = (myArray, counter) => {
    const greetText = "Hello ";

    for (let name of myArray) {
        console.log(`${greetText}${name}`);
    }
}

console.log("Exercise 1: ")
greeter(["Randy Savage", "Ric FLair", "Hulk Hogan"], 3);


// Exercise 2: Using destructuring assignment syntax and the spread operator, write a function that
// will capitalize the first letter of a string

const capitalize = ([first, ...rest]) => {
    return first.toUpperCase() + rest.join("").toLowerCase();
}

console.log("\nExercise 2: ");
console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));


// Exercise 3: Using array.proto.map, create a function to use the capitalize method from exercise 2 to 
// capitalize the first character of each color in the following array

const colors = ["red", "green", "blue"];

const capitalizedColors = colors.map(color => capitalize(color));

console.log("\nExercise 3: ");
console.log(capitalizedColors);


// Exercise 4: Using arary.proto.filter, create a function that will filter out all the values that
// are less than twenty

var values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value < 20);

console.log("\nExercise 4: ");
console.log(filterLessThan20);


// Exercise 5: Using array.proto.reduce, create a function that calculates the sum and product of a 
// given array

var array = [1, 2, 3, 4];

const calculateSum = array.reduce(function(currSum, num){
    return currSum + num;
});
const calculateProduct = array.reduce(function(currProd, num){
    return currProd * num;
});

console.log("\nExercise 5: ");
console.log(calculateSum);
console.log(calculateProduct);


// Exercise 6: Using ES6 syntax for class and subclass using extends to create a Sedan subclass which
// derives from Car Class. The parameters for the Car class is the model and year. The parameters for 
// the subclass is the model, year and balance.
// Use the super key word in the Sedan subclass to set the model and name in base Car constructor

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}.`
    }
}

console.log("\nExercise 6: ")
const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}.`
    }
}

const sedan = new Sedan("Volvo SD", 2018, 30000)
console.log(sedan.info());