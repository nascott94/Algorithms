// getElementById("element");

// const h1 = document.getElementById("title");
// h1.style.color = "pink";

// const btn = document.getElementById("btn");

// btn.style.backgroundColor = "black";
// btn.style.color = "white";

//TAG NAME
// const headings = document.getElementsByTagName("h2");
// headings[0].style.color = "pink";
// // console.log(headings.length);

// // const items = document.getElementsByTagName("li");
// const items = document.getElementsByTagName("li");
// const betterItems = [...items];
// betterItems.forEach(function (item) {
//   console.log(item);
// });

//CLASSNAME
// const listItems = document.getElementsByClassName("special");
// console.log(listItems);

//QUERY SELECTOR
// const result = document.querySelector("#result");
// result.style.backgroundColor = "pink";

// const item = document.querySelector(".special");
// console.log(item);

// const lastItem = document.querySelector("li:last-child");
// console.log(lastItem);

// const list = document.querySelectorAll(".special");
// list.forEach(function (item) {
//   console.log(item);
//   item.style.color = "green";
// });

//CHILD/PARENT
// const result = document.querySelector("#result");
// const allChildren = result.childNodes;
// // console.log(allChildren);
// const children = result.children;
// console.log(children);
// console.log(result.firstChild);
// console.log(result.lastChild);

//PARENT ELEMENT
// const heading = document.querySelector("h2");
// console.log(heading.parentElement.parentElement);

//PREVIOUS SIBLING
// const first = document.querySelector(".first");
// const second = first.nextSibling;
// console.log(second);

// const last = document.querySelector("#last");
// const third = last.previousSibling.previousSibling;
// console.log(third);

//NODE VALUE/TEXT CONTENT
// const item = document.getElementById("special");
// const value = item.firstChild.nodeValue;
// console.log(item.childNodes);

//getAttributes,setAttributes
// const first = document.querySelector(".first");
// const idValue = first.getAttribute("id");
// console.log(idValue);

// const link = document.getElementById("link");
// const showLink = link.getAttribute("href");
// console.log(showLink);

// const last = link.nextElementSibling;
// last.setAttribute("class", "first");
// last.textContent = "i also have a class of first";
// console.log(last);

// const links = document.querySelectorAll(".first");
// console.log(links);

// //CLASSNAME/CLASSLIST
// const first = document.getElementById("first");
// const second = document.getElementById("second");
// const third = document.getElementById("third");

// const classValue = first.className;
// console.log(classValue);

// second.className = "colors text";
// third.classList.add("colors");

// //CREATE ELEMENT
// const result = document.querySelector("#results");
// //create empty element
// const bodyDiv = document.createElement("div");
// //create text node
// const text = document.createTextNode;

// // SELECT ELEMENT
// // addEventListener()
// // what event, what to do

// const btn = document.querySelector(".btn");
// const heading = document.querySelector("h2");

// function changeColors() {
//   let hasClass = heading.classList.contains("red");
//   if (hasClass) {
//     heading.classList.remove("red");
//   } else {
//     heading.classList.add("red");
//   }
// }
// // btn.addEventListener("click", function () {
// //   heading.classList.add("red");
// // });
// btn.addEventListener("click", changeColors);

//CLICK- fires after full action occurs
//mouse down
//mouse up
//mouse enter
//mouse leave
// const heading = document.querySelector("h1");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   console.log("you clicked me");
// });
// btn.addEventListener("mousedown", function () {
//   console.log("down");
// });
// btn.addEventListener("mouseup", function () {
//   console.log("up");
// });

// heading.addEventListener("mouseenter", function () {
//   heading.classList.add("blue");
// });
// heading.addEventListener("mouseleave", function () {
//   heading.classList.remove("blue");
// });

// //KEYPRESS
// const nameInput = document.getElementById("name");
// // nameInput.addEventListener("keypress", function () {
// //   console.log("you pressed that key ya did");
// // });
// nameInput.addEventListener("keyup", function () {
//   console.log(nameInput.value);
// });

//EVENT OBJECT ARGUMENT
const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

heading.addEventListener("click", function (event) {
  console.log(event.currentTarget);
});

btn.addEventListener("click", function (event) {
  event.currentTarget.classList.add("blue");
  console.log(event.type);
});

function someFun(e) {
  e.preventDefault();
}
