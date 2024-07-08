//class
class User {
    private _username: string;
    private _email: string;
    private _hash: string;
    private _createdAt: Date;

    constructor(username:string, email:string, hash:string) {
        this._username = username;
        this._email = email; 
        this._hash = hash;
        this._createdAt = new Date();
    }

    //Like Java
    public getUsername():string {
        return this.username;
    }

    //JS
    get username(): string {
        return this._username;
    }

    set username(username:string) {
        this._username = username;
    }

    public getEmail():string {
        return this._email;
    }

    public toString(): string {
        return `[Username: ${this.username}, 
        Email: ${this._email}, CreatedAt: ${this._createdAt.toLocaleDateString("pt-BR")}]`;
    }

}

//Inheritance
class Employee extends User {
    private base: number;
    private office: string;

    constructor(username:string, email:string, hash:string, base:number, office:string) {
        super(username, email, hash);
        this.base = base;
        this.office = office;
    }

}

const user = new User("Batman", 
    "batman@batemail.com", 
    "$2y$10$FEMd.eU8/ZYoXiqewZ.J.uASyzrEbRN.ubjr63dBDnt2LLZm6R646");

const employee = new Employee("Batman", 
    "batman@batemail.com", 
    "$2y$10$FEMd.eU8/ZYoXiqewZ.J.uASyzrEbRN.ubjr63dBDnt2LLZm6R646",
    0, 
    "BatCav");

console.log(user.toString());
console.log(employee.username);
employee.username = "Dark Knight";
console.log(employee.username);