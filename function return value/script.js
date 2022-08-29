//membuat function return value

function sayHelloWorld(firstname, middlename ,lastname){
    let say = (`<p><strong>Hello ${firstname} ${middlename} ${lastname} </strong></p>`);
    return say;
}

//memanggil function dengan return value
let result = sayHelloWorld("khairul", "Anwar", "Tanjung");
document.writeln(result); 
 
//contoh lain menggunakan banyak return value
function getFinalValue(value){
    if(value > 90){
        return "A";
    }else if(value > 80){
        return "B";
    }else if(value > 70){
        return "C";
    }else if(value > 60){
        return "D";
    }else{
        return "E"
    }
    
}

//memanggil function

let finalValue = getFinalValue(99)
document.writeln(`kamu mendapatkan nilai ${finalValue}`);


//cara menghentikan eksekusi dengan return
function isContains(array, searchValue){
    for(let element of array){
        console.info("iterasi " + element)
        if(element === searchValue){
            return true;
        }
    }
    return false;
}

//memanggil

let array = [21,3,34,58,53,75.777,345,2987,62113,2222221,];
let search = 2222221;
let found = isContains (array, search);
console.info(`${found}`);