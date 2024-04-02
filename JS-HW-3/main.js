//  comprasion variable

let num1 = 24;
let num3 = 43;
let num4 = 24;
let num2 = 74;
let num6 = 65;

// let's compare the variable

console.log("24 and 74 is equal? ans: ", num1 == num2); // false
console.log("24 and 24 is equal? ans: ", num1 == num4); // true

console.log("Is 43 less than 74: ", num1 < num2); // true
console.log("Is 43 greater than 74: ", num1 > num4); // false

console.log("Is 43 less or equal than 74: ", num3 <= num2); // true
console.log("Is 43 greater or equal than 74: ", num3 >= num2); // false
console.log("Is 24 less or equal than 24: ", num1 <= num4); // true

// OR & AND operator
// OR represented by ||
// AND operator represented by &&

// if any comparetion or value is true in OR operator than the output will be true. if all comparetion or value is False in OR operator output will be false
// if any comparetion or value is false in AND operator than the output will be False. if all comparetion or value is TRUE in OR operator output will be true.

console.log("OR operator: ", num3 <= num2 || num3 >= num2);
console.log("AND operator: ", num3 <= num2 && num3 >= num2);

// if, else if & else

let age = prompt("Please enter your age: ");

if (age < 0) {
  console.log("invalid... Reload the page again.");
} else if (age >= 0 && age <= 17) {
  console.log("Sorry, You can't apply for id. You have to be a 18");
} else if (age > 17 && age <= 50) {
  console.log("Your perfect for apply");
} else if (age > 50 && age <= 90) {
  console.log("Your perfect for apply");
} else if (age > 90 && age <= 150) {
  console.log("your too much old, but you can apply");
} else {
  console.log("you can't apply");
}
