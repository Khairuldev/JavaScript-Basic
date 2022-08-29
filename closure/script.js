//closure
function createAdder(value){
    let owner = "Khairul";
    
    function add(param){
        console.info(owner);
        return value + param;
    }

    return add;
}

let addTwo = createAdder(2);
// function addTwo(param){
//      console.info("Khairul");
//      return 2 + param;
// }

console.info(addTwo(10));
console.info(addTwo(20));

const addTen = createAdder(10);
//function addTwo(param){
//      console.info("Khairul");
//      return 10 + param;
// }

console.info(addTen(10));
console.info(addTen(20));
