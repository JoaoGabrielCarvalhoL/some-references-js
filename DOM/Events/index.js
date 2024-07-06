"use strict";

function someMessage(message) {
    alert(message);
}

const button = document.querySelector(".btn");
button.onclick = function some() {
    alert(1)
}


const buttonTwo = document.querySelector(".btnTwo");

buttonTwo.addEventListener("mousemove", (event) => {
    alert("First Event!")
});

buttonTwo.addEventListener("click", (event) => {
    alert("Second event!")
});


const link = document.querySelector("a"); 

link.addEventListener("click", (event) => {
    event.preventDefault();
})

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
