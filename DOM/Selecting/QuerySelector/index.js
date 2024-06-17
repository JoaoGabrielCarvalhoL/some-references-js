"use strict";
/**
 * . class 
 * # id
 */

const title = document.querySelector("h1")
console.log(title)
title.style.color = "white"
title.style.backgroundColor = "black"
title.style.display = "flex"
title.style.justifyContent = "center"


const firstClass = document.querySelector(".firstClass");
console.log(firstClass)

let timer = 0; 
setInterval(() => {
    title.innerText = timer
    timer++;
}, 1000)