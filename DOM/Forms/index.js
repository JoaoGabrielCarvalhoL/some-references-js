"use strict";

const form = document.forms.namedItem("registration");

const title = document.querySelector("h1");

console.log(title);

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.name.value;
        const password = form.password.value;
        console.log(`Name: ${name} | Password: ${password}`)

    const formData = new FormData(form);
    console.log(formData);
    console.log("Attribute")
    console.log(formData.get("name"));
    console.log(formData.get("password"));
    
});    

    
}


