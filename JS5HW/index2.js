// create a new unordered list element
let ul = document.createElement("ul");

// create multiple list item elements and add them to the list
for (let i = 1; i <= 6; i++) {
  let li = document.createElement("li");
  li.textContent = "Item " + i;
  ul.appendChild(li);
}

// // style the list items using sibling selectors
// let lis = ul.querySelectorAll("li");
// for (let i = 1; i < lis.length; i++) {
//   if (i % 2 === 0) {
//     lis[i].style.backgroundColor = "lightgreen";
//   } else {
//     lis[i].style.backgroundColor = "lightpink";
//   }
//   lis[i].style.borderTop = "1px solid black";
// }

// add the list to the document
document.body.appendChild(ul);


// select all the <li> elements on the page
let lis = document.querySelectorAll("li");

// loop through each <li> element and add styles
for (let i = 0; i < lis.length; i++) {
  lis[i].style.backgroundColor = "lightblue";
  lis[i].style.color = "white";
  lis[i].style.padding = "10px";
  lis[i].style.marginBottom = "10px";
}

// select and style every other <li> element using a for loop
for (let i = 1; i < lis.length; i += 2) {
  lis[i].style.backgroundColor = "lightgreen";
}

// select and style every other <li> element using :nth-child selector
let oddLis = document.querySelectorAll("li:nth-child(odd)");
for (let i = 0; i < oddLis.length; i++) {
  oddLis[i].style.backgroundColor = "lightgreen";
}

// select and style every other <li> element using :nth-child selector
let evenLis = document.querySelectorAll("li:nth-child(even)");
for (let i = 0; i < evenLis.length; i++) {
  evenLis[i].style.backgroundColor = "lightpink";
}

// select and style every <li> element that comes directly after another <li> element
let siblingLis = document.querySelectorAll("li + li");
for (let i = 0; i < siblingLis.length; i++) {
  siblingLis[i].style.borderTop = "1px solid black";
}
