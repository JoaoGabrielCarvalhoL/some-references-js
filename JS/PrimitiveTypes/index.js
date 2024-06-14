/**
 * Primitive Types: 
 * String, Number, Boolean, Undefined, Null, Array & Object.
 */

let message = "Hello dude. Here go again in this bomb. This time, i gonna make this shit."

//Template Literals: 
let anotherMessage = `Message of: ${message}`
console.log(anotherMessage)

//Number
let num = 1996;
let sNum = "1996"; 
console.log(Number(sNum) + num);
console.log(typeof num);
console.log(typeof sNum);


//Undefined -> Value undefined in context. Variable declared but not initialized.
//Null -> No reference to anyone
console.log(null === undefined)

//Array 
let names = ["João", "Gabriel", "Carvalho", "Lopes", "Cruz"]
names.forEach(element => {
    console.log(element)
});

for (let i = 0; i < names.length; i++) {
    console.log(i, names[i])
}

//Object

let user = {
    "name": "João Gabriel Carvalho", 
    "email": "27.joaogabriel@gmail.com", 
    "credentials": {
        "id": "1ec1cdc7-df58-4491-9299-13b3587fc726",
        "hash": "$2a$12$hx0WSgBG.XYA70nSWCgGb.DvcdSbijbosP/leUTeCUiGWgtDA7Sgy", 
        "role": {
            "enabled": true, 
            "ROLE_": "ADMIN"
        }
    }
}
console.log(typeof user)
console.log(user)