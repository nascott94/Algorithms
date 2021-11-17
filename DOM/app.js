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
