// //  objects

// const myObj = {
//   name: "naim",
//   isStudent: true,
//   fav: {
//     sports: "chess",
//     fruits: ["apple", "orange", "mango", "watermalon"],
//     ok: function () {
//       return this;
//     },
//     printFavFruit: function () {
//       this.fruits.map((val, i) => {
//         console.log(`fruit-${i+1}: ${val}`);
//       });
//     },
//     anotherObj: {
//       ok: this.sports, // ! doesn't work
//     },
//   },
// };

// myObj.fav.printFavFruit();

// console.log(myObj.fav.ok());

// HW

let blank = {};

blank.name = "naim";
blank.lastName = "islam";
blank.func1 = function () {
  console.log(this.name); // TODO: why it's invoking now ?
};

blank.obj1 = {};

blank.obj1.hello = "Hello!";
blank.obj1.world = "World";

blank.obj1.fun2 = function () {
  return `${this.hello} ${this.world}...`;
};

blank.obj1.obj2 = {
  "object 2": "this is objects 2 with some unique key",
};

console.log(
  `
  name: ${blank.name} ${blank.lastName}.

  blank objects function 1: ${blank.func1()}

  blank objects object 1 property: ${blank.obj1.fun2()}

  `
);
