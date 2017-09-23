class Student {
    fullName: string;
    constructor(public firstName:string, public middleInitial:string, public lastName: string)
    {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person;
}
var user = new Student("dave","l","birt");
document.body.innerHTML = greeter(user);
