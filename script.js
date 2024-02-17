// VARIABLES: Global and Local scope Variable

// Global variables can be used by everyone, both inside of functions and outside.z

let i;

for (i = 0; i < 5; i++) {
    let p = 10;
    console.log(i + p);
}

// console.log(i);

//  OPERATORS & EQUALITY

//  ARITHMETIC OPERATOR

// +,  *, -, /, %, ==, increment(++), decrement(--)


//  minus (-);


let cost = 15
let profit;
let salesPrice = 20

profit = salesPrice - cost;

console.log(profit)

// Plus (+)

cost = 15, profit = 5, salesPrice = cost + profit;
console.log(salesPrice);


//  strings

// let firstName = " Olatunde",  Surname = "Tobi", fullName = Surname + firstName;
// console.log(fullName + " is a big boy")

let firstName = `Olatunde`,  Surname = `Tobi`, fullName = Surname + firstName;
console.log(`${fullName} is a big boy`);