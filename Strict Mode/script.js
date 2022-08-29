//objet Method

let person = {
    name : "khairul",
    sayHallo : function(name){
        alert(`Hallo ${name}`);
    }
}

person.sayHallo("budi");

//Menambah Method Ke Object

let person2 = {
    name : "anwar"
};

person2.sayHello = function(name){
    console.info(`Hallo ${name}`);
}

person2.sayHello("lala")


