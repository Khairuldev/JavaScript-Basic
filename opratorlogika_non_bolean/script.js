
console.info("Hello" ||"");
console.info("" ||[]);
console.info("0" ||"Nol");
console.info(0||"NOL");
console.info(null ||"NULL");
console.info(undefined ||"UNDIFEND");
console.info( 0|| false);

let person = {
    firstname : "",
    lastname : "UNDIFINED"
};
 
let name = person.firstname || person.lastname;
console.info(name);

console.info("Hello" && "");
console.info(""&& []);
console.info("0"&& "Nol");
console.info(0&&"NOL");
console.info(null &&"NULL");
console.info(undefined &&"UNDIFEND");
console.info( 0&& false);