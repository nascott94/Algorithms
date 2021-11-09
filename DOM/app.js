// getElementById("element");

// const h1 = document.getElementById("title");
// h1.style.color = "pink";

// const btn = document.getElementById("btn");

// btn.style.backgroundColor = "black";
// btn.style.color = "white";

//TAG NAME
const headings = document.getElementsByTagName("h2");
headings[0].style.color = "pink";
// console.log(headings.length);

// const items = document.getElementsByTagName("li");
const items = document.getElementsByTagName("li");
const betterItems = [...items];
betterItems.forEach(function (item) {
  console.log(item);
});
