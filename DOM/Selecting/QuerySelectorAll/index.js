"use strict";

const paragraphs = document.querySelectorAll("p")
paragraphs.forEach((element, index) => {
    if (index % 2 == 0) {
        element.style.backgroundColor = "black"
        element.style.color = "white"
    } 
    console.log(index, element)
})