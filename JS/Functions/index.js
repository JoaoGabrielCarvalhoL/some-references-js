//function declaration
function first() {
    return "function declaration"
}
console.log(first())

//function expression
const second = function() {
    return "function expression"
}

console.log(second());

//Arrow function
const third = () => {
    return "Arrow function"
}
console.log(third())

//use strict
"use strict";

//Closure: function inside another function
function greeting(name) {
    const message = `Hello `
    function hello() {
        return `${message} name`
    }
    return hello();
}





