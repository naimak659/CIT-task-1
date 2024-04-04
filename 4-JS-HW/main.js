let input = prompt(`Enter a number:`);
let userInput = +input;


switch (userInput) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`this is less than 5`);
    default:
        console.log(`this is greater than 5`);
}


// for loop
for (let x = 1; x < 11; x++) {
  let output = `${userInput} * ${x} = ${userInput * x}`;
  console.log(output);
}

// while loop
let i = 11;
while (i < 21) {
  let output = `${userInput} * ${i} = ${userInput * i}`;
  console.log(output);
  i++;
}

// do while loop
let y = 21;
do {
  let output = `${userInput} * ${y} = ${userInput * y}`;
  console.log(output);
  y++;
} while (y < 31);

// if (typeof userInput == 'number') {
// } else{
//     console.log(`enter a number`);
// }
