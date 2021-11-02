//STRING PROPERTIES AND METHODS
//wrapper String Object, have access to property and methods attached to the string

// let text = "JOJI SCOTT";
// let result = text.length;
// console.log(result);

// console.log(text.length);
// //.localelowercase is a method
// console.log(text.toLocaleLowerCase());
// console.log(text.charAt(0));
// console.log(text.charAt(text.length - 1));
// console.log(text);
// console.log(text.trim());
// //chaining the methods
// console.log(text.trim().toLocaleLowerCase().startsWith("joji"));

//TEMPLATE LITERALS
//backticks characters ``- above tab
//interpolation ${} - insert expression(value)

// const name = "nat";
// const age = 27;
// const sentence = "it be " + name;

// const value = `hello ${name} you are ${age} .......`;
// console.log(value);

// //ARRAY PROPERTIES AND METHODS
// let names = ["dan", "nat", "joji", "bb becca", "pokemon"];
// //length
// console.log(names.length);
// //WILL ALWAYS RETURN THE LAST VALUE
// console.log(names[names.length - 1]);
// //CONCAT
// const lastName = ["possehl", "scott", "scott", "blaustein", "blaustein"];
// const allNames = names.concat(lastName);
// console.log(allNames);
// //REVERSE
// console.log(allNames.reverse());
// //UNSHIFT, adds to array
// allNames.unshift("CARO");
// console.log(allNames);
// //SHIFT
// allNames.shift();
// console.log(allNames);
// //PUSH
// allNames.push("pooch");
// //POP
// allNames.pop(allNames);
// //SPLICE
// const specificNames = allNames.splice(2, 1);
// console.log(specificNames);
// console.log(allNames);

// //ARRAYS AND FOR LOOPS
// const names = ["lucy", "olive", "wile", "pumpkin", "leo"];
// const lastName = "DOGZ";
// let newArray = [];
// //FOR LOOP
// for (let i = 0; i < names.length; i++) {
//   console.log(i);
//   console.log(names[i]);
//   const fullName = `${names[i]} ${lastName}`;
//   newArray.push(fullName);
// }

// console.log(names);
// console.log(newArray);

// //FUNCTIONS, RETURN, IF, ARRAYS, FOR LOOPS
// const gas = [20, 40, 100, 30];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   if (total > 100) {
//     console.log(`U SPENDING TOO MUCH `);
//   }
//   console.log(`IT OK KEEP SPENDING`);

//   return total;
// }

// const gasTotal = calculateTotal(gas);
// const foodTotal = calculateTotal(food);
// const randomTotal = calculateTotal([200, 4000, 500, 1]);

// console.log({
//   gas: gasTotal,
//   food: foodTotal,
//   random: randomTotal,
// });

//REFERNCE VS VALUE
//when assignging primitive data type value to a variable any changes are made directly to that value without effecting og value
//when assigning non prim data type value to a variable is done by reference so any changes will effect all the references
// const number = 1;
// const number2 = number;
// console.log(`the first value is ${number}`);
// console.log(`the first value is ${number2}`);

// let person = { name: "JOJI" };
// let person2 = person;
// person2.name = "pokemon";

// console.log(`the name of the first person is ${person.name}`);
// console.log(`the other person is ${person2.name}`);

//NULL AND UNDEFINIED
//both represent "no value"

//undefined - "javascript can not find value for this"

//variable without value
//missing function arguments
//missing object properties

//null-"developer sets the value"

//TRUTHY AND FALSY
//"",'',``,0, -0, NaN, false, null, undefined .... these are falsy values, everything else truthy

// const bool1 = true;
// const bool2 = 2 > 1;

// const text = "HELLO WORLD IT ME";
// if (text) {
//   console.log("the value is ~truthy~");
// } else {
//   console.log("ok the value is ~falsy~");
// }

//TERNARY OPERATOR
//condition ? (runs if true) : (runs if false)

// const value = 1 < 0;

// value ? console.log("value is TRUEEEEEE") : console.log("value is FALSEEEE");

//GLOBAL AND LOCAL SCOPE
//any variable outside code block {} is said to be in Global Scope
//can be access anywhere in the program
//gotchas: name collisions, modify by mistake

// let name = "SHISHTO";
// name = "POKEMON";

// //VARIABLE LOOKUP
// //{} - CODE BLOCK

// const globalNumber = 5;
// function add(num1, num2) {
//   const result = num1 + num2 + globalNumber;
//   return result;
// }
// console.log(add(3, 4));

//CALLBACK FUNCTIONS, HIGHER ORDER FUNCTIONS
//higher order functions: accept another function as an argument or returns another function as a result
//callback function: passed to another function as an argument and executed inside that function

// function morning(name) {
//   return `Good morning ${name.toUpperCase()}`;
// }
// function afternoon(name) {
//   return `Good afternoon ${name.repeat(3)}`;
// }

// function greet(name, callBack) {
//   const myName = "JOJI";
//   console.log(`${callBack(name)}, I AM YOUR RULER ${myName}`);
// }
// greet("dan", morning);
// greet("pokemon", afternoon);
