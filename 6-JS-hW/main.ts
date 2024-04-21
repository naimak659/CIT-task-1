// add function
const add = (a: number, b: number) => {
  let result: number = a + b;
  return ["Add", result];
};
// substraction function
const sub = (a: number, b: number) => {
  let result: number = a - b;
  return ["substraction", result];
};
// multiply function
const multiply = (a: number, b: number) => {
  let result: number = a * b;
  return ["multiply", result];
};
// division function
const division = (a: number, b: number) => {
  let result: number = a / b;
  return ["division", result];
};
// Exponentiation  function
const expo = (a: number, b: number) => {
  let result: number = a ** b;
  return ["Exponentiation", result];
};
// remeinder function
const remeinder = (a: number, b: number) => {
  let result: number = a % b;
  return ["remeinder", result];
};

let math = [add, sub, multiply, division, expo, remeinder];
let a: number = 7;
let b: number = 79;

console.log(`When a = ${a} & b = ${b},`);

// loop
for (let x = 0; x < math.length; x++) {
  let res: (string | number)[] = math[x](a, b);
  // another loop
  for (let y = 0; y < res.length - 1; y++) {
    console.log(`${res[y]}: ${res[y + 1]}`);
  }
}
