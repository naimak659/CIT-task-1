// const dummyArray = [
//   "apple",
//   42,
//   "banana",
//   7,
//   "orange",
//   15,
//   "grape",
//   23,
//   "pear",
//   10,
//   "pineapple",
//   33,
//   "watermelon",
//   18,
//   "kiwi",
//   5,
//   "apple",
//   "mango",
//   29,
//   "strawberry",
//   12,
// ];

// // TODO: Search

// // ? array method indexOf();

// let positionApple = dummyArray.indexOf("apple");
// let position23 = dummyArray.indexOf(23);
// let position56 = dummyArray.indexOf(56);

// console.log(
//   `apple index is: ${positionApple} , 23 index is: ${position23},  56 index is: ${position56}`
// );

// // ? array method lastIndexOf();

// let lastIndexOf = dummyArray.lastIndexOf("apple");
// console.log("last index of apple", lastIndexOf);

// // ? .includes()

// let include = dummyArray.includes("strawberry");

// console.log("include", include);

// // ? find()

// let find = dummyArray.find((val, index, arr) => {
//   return typeof val == "string";
// });
// console.log("find", find);

// // ? findLast()

// let findTheLast = dummyArray.findLast((val) => val > 12);

// console.log("findTheLast", findTheLast);

// // ? findIndex()

// let findIndex = dummyArray.findIndex((val, i, arr) => val < 4);
// console.log("findIndex", findIndex); // -1

// // ? findLastIndex()

// let findLastIndex = dummyArray.findLastIndex((val) => val > 5);
// console.log("findLastIndex", findLastIndex);

// // ? array method copyWithin();

// dummyArray.copyWithin(2, 11, 14);
// console.log(dummyArray);

// // todo: Let talk about "sort"

// // think we have an array of [5, 1] now it will compare by there 1st digit and sort it [1, 5] now if we have an array which have [ 80, 400]... the sort will be [ 400, 80] cause it comapre 1st digit

// console.log([80, 400].sort()); //! out put [400, 80]

// // now how can we fix this? answer is simple you can take an anonymous funtion in sort method like this

// console.log([80, 400].sort((a, b) => a - b)); // ! output is [80,400]
// //  * it will take every index property and compare it
// //  * if the a-b is negetive that mean a will set before b
// //  * if a-b is positive that mean b will set before a
// //  * if a-b is 0 it will remain same

// //
// const fruit_N_number = [
//   "apple",
//   42,
//   "banana",
//   7,
//   "orange",
//   15,
//   "grape",
//   23,
//   "pear",
//   10,
//   "pineapple",
//   33,
//   "watermelon",
//   18,
//   "kiwi",
//   5,
//   "apple",
//   "mango",
//   29,
//   "strawberry",
//   12,
// ];

const fruits = [
  "Banana",
  "Orange",
  "Apple",
  "Mango",
  "Mango1",
  "Mango2",
  "Mango3",
];

console.log(fruits.copyWithin(0, 3));
