const dummyArray = [
  "apple",
  42,
  "banana",
  7,
  "orange",
  15,
  "grape",
  23,
  "pear",
  10,
  "pineapple",
  33,
  "watermelon",
  18,
  "kiwi",
  5,
  "apple",
  "mango",
  29,
  "strawberry",
  12,
];

c = console.log;

// array method indexOf();

let positionApple = dummyArray.indexOf("apple");
let position23 = dummyArray.indexOf(23);
let position56 = dummyArray.indexOf(56);

console.log(
  `apple index is: ${positionApple} , 23 index is: ${position23},  56 index is: ${position56}`
);

// array method lastIndexOf();

let lastIndexOf = dummyArray.lastIndexOf("apple");

console.log("last index of apple", lastIndexOf);

// array method copyWithin();

dummyArray.copyWithin(2, 11, 14);
console.log(dummyArray);


