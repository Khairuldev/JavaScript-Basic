//recrusif function adalah function yang memanggil function dirinya sendiri, dapat juga digunakan untuk memper mudah dalam melakukan faktorial

//faktorial looping
function faktorial(value){
    let result = 1;
    for(let i = 1; i <= value; i++){
        result *= i;
    }
    return result;    
}

console.info(faktorial(7));
console.info(1 * 2 * 3 * 4 * 5 * 6 * 7);

console.log("\n");

//menggunakan recrusif function
function faktorialRecrusif(value){
    if(value === 1){
        return 1;
    }else{
    return value * faktorialRecrusif(value - 1);
    }
}

console.info(faktorialRecrusif(7));

//cara kerja faktorialRecrusif(7)
// 7 * faktorialRecrusif(6)
// 7 * 6 * faktorialRecrusif(5)
// 7 * 6 * 5 * faktorialRecrusif(4)
// 7 *  5 * 4 * faktorialRecrusif(3)
// 7 * 5 * 4 * 3 * faktorialRecrusif(2)
// 7 * 5 * 4 * 3 * 2 * faktorialRecrusif(1)
// 7 * 5 * 4 * 3 * 2 * 1
