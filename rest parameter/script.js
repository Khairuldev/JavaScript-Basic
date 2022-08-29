//rest parameter function

function sum(name, ...data){
    let total = 0;
    for(let item of data){
        total += item;
    }
     console.info(`total ${name} is ${total}`);
}

sum("orange", 12, 13, 22, 56, 88, 98, 965);
sum("lemon", 32, 83, 22, 56, 88, 98, 965);
sum("strawbery", 2, 513, 552, 876, 88, 98, 965);

let value =[10, 10, 10, 10, 10, 1];
sum(`text ${value}`);

// argument object
function oldSum(){
    let total = 0;
    for(const argument of arguments){
        total += argument;
    }
    console.info(`total is ${total}`);

}

oldSum(1,2,3,4,5,6,7,8,9,10);