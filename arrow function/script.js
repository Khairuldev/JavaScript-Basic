//arrow function mirip dengan anonymous function

// arrow menggunkan block
let sayHallo = (name) => {
    let say = ("hallo " + name);
    console.info(say);
}

sayHallo("Khairul")


//arrow tanpa block tapi hanya untuk satu baris saja

let say = (name) => console.info(`hallo ${name}`);

say("anwar")


//arrow function return value
let sum = (first, second) => first + second
console.info(sum(9,9))


// arrow function tanpa kurung parameter :
// jika parameter diarrow function hanya 1, kita bisa tidak menggunakan kurung pada parameter

let nama = name => console.info(`hello ${name}`)
nama("tejok")


//arrow function sebagai parameter
function giveMename(callback){
    callback("dedi")
}

giveMename (name => console.info(`hallo ${name}`));