// VARIABLES: Global and Local scope Variable

// Global variables can be used by everyone, both inside of functions and outside.z

// let i;

// for (i = 0; i < 5; i++) {
//     let p = 10;
//     console.log(i + p);
// }

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

// AND Operator

let result;
let age = 25;

if(age > 20 && age < 30) {
    result = age + 50;
}else {
    result = age;
}

console.log(result);


// OR Operator

let costs = 40;
let selPrice;
let profits = 10;

if (costs >= 50 || costs === 55) {
    selPrice = costs + profits;
}
else{
    selPrice = costs;
}

console.log(selPrice);

// NOT Operator
let name = "Hayzed";

if(name !== "Hayzed") {
    console.log("Why are u lying");
}
else {
    console.log("That is good")
}


// Loop

// While loop

let num = 5;
let i = 0;
while (i < num) {
    i++;
    console.log(i);
}

for (let index = 0; index < num; index++) {
    console.log(index);
}


//  Checking for  a leap year
//  CONDITIONS:
// The year divided by 4 should have a remainder of 0
// The year divided by 100 should have a non-zero remainder
// If year divided by 100 gives no remainder, then divided by 400 should give a remainder 


const year = prompt("Enter the year");

const checkLeap = (year) => {
    let result;
    if((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) {
        result = "Yes! it is a leap year";
    }
    else{
        result = "No! it is not a leap year"
    }

    return result;
}

const answer = checkLeap(2000)

alert(answer);
// console.log(answer);