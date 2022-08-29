//this diGlobal Scope akan menjadi window
console.info(this);

function sample(){
    console.info(this);

    function inner(){
        console.info(this);
    } 

    inner();
}

sample();


// this di object Method, this menjadi object si pemilik function

let person = {
    name : "khairul",
    sayHallo : function(names){
        console.info(`Hallo ${names} My Name Is ${this.name}`);
    }
};

person.sayHallo('linda');
person.sayHallo('randi');



