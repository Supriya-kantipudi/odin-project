const container = document.querySelector("#container");
const p1 = document.createElement("p");
const heading1 = document.createElement("h3");
heading1.style.color = "blue";
p1.style.color = "red";
p1.textContent = "Hey I a'm red";
heading1.textContent = "I am blue h3!";
container.appendChild(p1);
container.appendChild(heading1);
const div1 = document.createElement("div");
const heading2 = document.createElement("h1");
const p2 = document.createElement("p");
heading2.textContent = "I am in div";
p2.textContent = "ME TOO";
div1.style.border = "black";
div1.style.backgroundColor = "pink";
div1.appendChild(heading2);
div1.appendChild(p2);
container.appendChild(div1);