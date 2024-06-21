"use strict";

const div = document.querySelector("div")
div.setAttribute("id", "content")
div.setAttribute("class", `${div.getAttribute("class")} anotherClass`)

console.log(div)