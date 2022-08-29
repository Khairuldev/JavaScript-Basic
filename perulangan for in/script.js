
//for in object (yang diambil yaitu propertynya)

document.writeln("<p><strong>Pengunaan for in didalam object:</strong>  </p>");

let person = {
    firstname: "khairul",
    middlename: "anwar",
    lastname: "tanjung"  
};

for(let property in person){
    document.writeln(`<p> property ${property}: ${person[property]} </p>`)
}

document.writeln("<br>")

//for in array (yang diambil yaitu indexnya)
document.writeln("<p><strong> Pengunaan for in didalam array :</strong> </p>");

let names = ["khairul", "anwar", "tanjung"];

for(let index in names){
    document.writeln(`<p> index ${index}: ${names[index]} </p>`)
}