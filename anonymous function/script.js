//anonymous function
let say = function(name){
    console.info("Hello " + name)
}

say("eka")


//anonymous function di parameter

function giveMename (callback){
    callback("eko");
}

giveMename(say);
giveMename(function(name){
    console.info(`hai selamat siang ${name}`)
});
