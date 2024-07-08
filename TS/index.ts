//String, Number, Boolean, Object, Array, Any, Enum

let firstName: string = "João Gabriel";
let accepted: boolean = false; 
let size: number = 1024;
let object: Object = {};
let values: Array<Object> = new Array(10);
//let names: [string, string] = ["Joao", "Gabriel", "Carvalho"]; when this is used?

console.log(typeof firstName);
console.log(typeof accepted);
console.log(typeof size);
console.log(typeof user);
console.log(typeof values);

const fn = function() {

}

enum Status {
    ACTIVATED, 
    DISABLED
}