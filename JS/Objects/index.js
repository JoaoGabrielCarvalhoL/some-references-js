let user = {
    "name": "João Gabriel Carvalho", 
    "email": "27.joaogabriel@gmail.com", 
    "credentials": {
        "id": "1ec1cdc7-df58-4491-9299-13b3587fc726",
        "hash": "$2a$12$hx0WSgBG.XYA70nSWCgGb.DvcdSbijbosP/leUTeCUiGWgtDA7Sgy", 
        "role": {
            "enabled": true, 
            "ROLE_": "ADMIN"
        }, 
        getHash: function() {
            return this.hash;
        },
        getId: function()  {
            return this.id;
        }
    }
};

let auth = {
    "protocol": "oauth", 
    "user-agent": "linux/mozila", 
    "ip": "11-123-444-567"
};

console.log(user.credentials.getHash())
console.log(user.credentials.getId())

//Destructuring
const {name, email} = user;
console.log(name, email)

//Alias on destructuring
const {email: principal } = user;
console.log(principal);

//hasOwnProperty
let response = user.hasOwnProperty("auth");
console.log(response)

//Merge of objects
let merged = Object.assign(user, auth)
console.log(merged)

let objectAsString = JSON.stringify(user)
let objectUser = JSON.parse(objectAsString)
console.log(objectUser)