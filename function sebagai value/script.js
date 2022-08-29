//membuat function sebagai value / function didalam variabel
function sayHello(name){
    console.info(`Hello ${name}`);
}

let say = sayHello;

//memanggil function
sayHello("khairul");    
say("anwar");


// function di parameter

let Say = sayHello;

function giveMeName(callback){
    callback("risky")
}

giveMeName(sayHello);
giveMeName(say);
