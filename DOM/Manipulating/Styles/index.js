"use strict";

const h1 = document.querySelector("h1")
console.log(h1)

h1.style.fontSize = "50px";
h1.style.color = "white";
h1.style.backgroundColor = "black";
h1.style.display = "flex";
h1.style.justifyContent = "center";
h1.style.fontFamily = "Arial"

const paragraphs = document.querySelectorAll("p");

paragraphs.forEach((paragraph) => {
    paragraph.style.fontFamily = "Arial"; 
    paragraph.style.fontSize = "20px";
})

const div = document.querySelector("div");
div.classList.add("anotherClass")
console.log(div)
