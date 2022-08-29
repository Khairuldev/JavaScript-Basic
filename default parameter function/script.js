//membuat function opotional parameter

function register(name , gender = "unknown"){
    console.log(name);
    console.log(gender);
}


//memanggil function opotional parameter
register("khairul", "male");
register("herry");
register("derry", undefined);   
 
