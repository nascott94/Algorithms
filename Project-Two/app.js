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

//ARRAYS AND FOR LOOPS
const names = ["lucy", "olive", "wile", "pumpkin", "leo"];
const lastName = "DOGZ";
let newArray = [];
//FOR LOOP
for (let i = 0; i < names.length; i++) {
  console.log(i);
  console.log(names[i]);
  const fullName = `${names[i]} ${lastName}`;
  newArray.push(fullName);
}

console.log(names);
console.log(newArray);
