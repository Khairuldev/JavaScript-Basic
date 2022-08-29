//Arrow Function

let person = {
    name : "Eko",
    sayHallo : function (name){
        console.info(`Hallo ${name}`);
    }
};

person.sayHallo("Eki");


// Arrow Function Di Object

let person2 = {
    name : "Eko",
    sayHallo : (name) => {
        console.info(`Hallo ${name}`);
    }
};

person2.sayHallo("Edo");