"use strict";
/**
 * textContent: return text formatted
 * innerText: return text without formatting
 */

const paragrafh = document.querySelector(".paragrafh")
console.log(paragrafh.textContent)
console.log(paragrafh.innerText)


//innerHtml 
const div = document.querySelector("div")
div.innerHTML = "Change text by <strong>JS</strong>"