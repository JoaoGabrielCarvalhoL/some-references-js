"use strict";

//setTimeOut
setTimeout(() => {
    let timer = 1000;
    console.log(`Executed after: ${timer} miliseconds`)
}, 1000);

//setClearTimeout

const timeout = setTimeout(() => {
    console.log("After ten seconds.")
}, 10000);

clearTimeout(timeout);

const fun = () => {
    console.log("fun");
}

fun();

//setInterval 

console.log("Interval")
const interval = setInterval(() => {
    let timer = 0;
    console.log(`${timer}`)
}, 1000);
