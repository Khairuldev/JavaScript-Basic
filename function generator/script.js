// generator function MENGGUNAKAN TANDA BINTANG (*) dan untuk mengembalikan data di tiap iterasinya kita bisa menggunkann yeild
// GENERATOR FUNCTION TIDAK BISA MENGITERASI INDEXNYA BAHKAN TIDAK BISA DIUBAH DATANYA BIARPUN MENGGUNAKAN ARRAY
//generator bersifat lazzy artinya jika datanya belum kita ambil maka yield selanjutnya tidak akan di eksekusi


function* createnames(){
    yield "khairul";
    yield "anwar";
    yield "tanjung";
}

let names = createnames();
for(let name of names){
    console.log(name);
}

console.info("\n");
console.info("lazy \n");

// KODE FUNCTION GENERATOR KOMPLEK
//lazzy
function* buatGanjil(value){
    for(let i = 1; i <= value; i++){
        if(i % 2 === 1){
            console.info(`yield ${i}`);
            yield i;
        }
    }
        
}

let numbers = buatGanjil(100);
for(const number of numbers){
    console.info(number);
}

console.info("\n");
console.info("eager \n");

//eager artinya datanya dulu semua di ambil baru diiterasi
function buatGanjilArray(value){
    const result = []
    for(let i = 1; i <= value; i++){
        if(i % 2 === 1){
            console.info(`yield ${i}`);
            result.push(i);
        }
    }
        return result;    
}   

let angka = buatGanjilArray(100);
for(const number of angka){
    console.info(number);
}
