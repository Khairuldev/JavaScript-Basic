//membuat function opotional parameter

function sayHelloWorld(firstname, middlename ,lastname){
    let say = (`<p><strong>Hello ${firstname} ${middlename} ${lastname} </strong></p>`);
    return say;
}

//memanggil function opotional parameter
let result = sayHelloWorld("khairul");
document.writeln(result); 
 
