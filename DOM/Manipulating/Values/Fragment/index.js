"use strict";

const ul = document.querySelector("ul")
console.log(ul)

const fragment = document.createDocumentFragment();
console.log(fragment)

const values = ["First", "Second", "Third", "Fourthy", "Fivity"]
values.forEach((element) => {
    const li = document.createElement("li")
    li.innerHTML = element
    fragment.append(li)
})

ul.append(fragment)