// scope tebagi 2 yaitu global scope & local scope

// global scope
let counter = 0;

function hitMe(){
    // local scope function hitMe
    counter++; //we can access
}
hitMe();
hitMe();

console.info(counter);

//catatan : local scope bisa mengakses global scope, dan local scope tidak dapat mengakses local scope yang lain diatasnya atau dibawahnya. dan global scope tidak bisa mengakses local scope

//local scope
function first(){
    //local scope first
    let firstVariable = "first"
    console.info(firstVariable);
}

function second(){
    //local scope second
    let secondVariable = "second"
    console.info(secondVariable);
}

first();
second();

//global Scope
//console.info(firstVariable); //ERROR karena berada di global scope
//console.info(secondVariable); //ERROR karena berada di global scope


//Nested Function Scope
function First(){
    let firstVariable = "first"

    function firstNested(){
        console.info(firstVariable); //can access local scope first function    
    }

    firstNested();

}

First();


