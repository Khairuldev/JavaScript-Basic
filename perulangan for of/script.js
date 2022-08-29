
//for of (dapat meniterasi data yang ada didalam variablenya)

console.log("Pengunaan for of didalam aaray dengan mengiterasi character:")

let fullname = "khairul anwar tanjung";

for(let character of fullname){
    console.info(`${character}`)
}

console.log("\n")

//for of array (for of didalam array bisa digunakan untuk mengambil data valuenya )
console.log("Pengunaan for in didalam array dengan mengiterasi valuenya :");

let names = ["khairul", "anwar", "tanjung"];

for(let name of names){
    console.info(name)
}