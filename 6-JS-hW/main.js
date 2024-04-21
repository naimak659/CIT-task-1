"use strict";
// add function
const add = (a, b) => {
    let result = a + b;
    return ["Add", result];
};
// substraction function
const sub = (a, b) => {
    let result = a - b;
    return ["substraction", result];
};
// multiply function
const multiply = (a, b) => {
    let result = a * b;
    return ["multiply", result];
};
// division function
const division = (a, b) => {
    let result = a / b;
    return ["division", result];
};
// Exponentiation  function
const expo = (a, b) => {
    let result = a ** b;
    return ["Exponentiation", result];
};
// remeinder function
const remeinder = (a, b) => {
    let result = a % b;
    return ["remeinder", result];
};
let math = [add, sub, multiply, division, expo, remeinder];
let a = 7;
let b = 79;
console.log(`When a = ${a} & b = ${b},`);
// loop
for (let x = 0; x < math.length; x++) {
    let res = math[x](a, b);
    // another loop
    for (let y = 0; y < res.length - 1; y++) {
        console.log(`${res[y]}: ${res[y + 1]}`);
    }
}
