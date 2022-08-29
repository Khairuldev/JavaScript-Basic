document.writeln("Hello World");
document.writeln("</br>");

//*tipe data number binery
document.writeln(0b11111101);
document.writeln("</br>");

//*tipe data number octal
document.writeln(0o123);
document.writeln("</br>");

//*tipe data number hexadesimal
document.writeln(0x345);
document.writeln("</br>");

// tipe data text
document.writeln("<textarea cols='100' rows='10'>");
document.write("Nama \t \t:" + "\" khairul anwar tanjung \"\n");
document.write("jenis kelamin \t:" + "\" laki-laki \" \n");
document.write("alamat \t \t:" + "\" seilanggei \" \n");
document.writeln("</textarea>")

document.writeln("</br>");
document.writeln("</br>");

// variabel ada 3  = let , const, & var

let nama1 = "khairul anwar tanjung";
let nama2 = "fahru rozi";
let nama3 = "naila ramadani";

document.write(nama1);
document.writeln("</br>");
document.write(nama1);
document.writeln("</br>");
document.write(nama2);
document.writeln("</br>");
document.write(nama1);
document.writeln("</br>");
document.write(nama1);
document.writeln("</br>");
document.write(nama3);
document.writeln("</br>");
document.write(nama1);
document.writeln("</br>");
document.write(nama3);

document.writeln("</br>");
document.writeln("</br>");


for(i = 1; i <= 10; i++){
    if(i % 2 == 0){
        console.log(i + "\t bilangan Genap");
    }
    else{
        console.log(i + "\t angka ganjil");
    }
          
}

//oprator logika 
let result = 1 + 2;
document.writeln("<p> 1 + 2 = " + result + "</p>")
let originalResult = result;

result -= 1;
document.writeln("<p> " + originalResult + " - 1  = " + result + "<p>" )
originalResult = result;

result *= 25;
document.writeln("<p>" + originalResult + " * 25  = " + result + "<p>" )
originalResult = result;

result /= 4;
document.writeln(originalResult + " / 4  = " + result  )
originalResult = result;

result %= 2;
document.writeln("<p>" + originalResult + " % 2  = " + result + "<p>" )
originalResult = result;

document.write("</br>")
document.write("</br>")



//penggunan oprator perbandingan
let nilaiujian = 70;
let nilaiperaktek = 75;

let lulusujian = nilaiujian >= 70;
document.writeln(lulusujian)

let lulusperaktek = nilaiperaktek >= 75;
document.writeln(lulusperaktek)

let lulus = lulusujian || lulusperaktek;
document.writeln( lulus + "<p> \n </p>" ) 


//pegunaan backtik
let template = `nama siswa : ${nama1}, lulus : ${nilaiujian && nilaiperaktek > 70}`;
document.writeln(template);



//macam macam console
console.debug("Ini debug")
console.log("Hello World");
console.info("Hello World");
console.error("ini Eror");
console.warn("Ini Peringatan");

//pengunaan multinine string
let multinine = `nama saya khairul anwar
saat ini sedang belajar 
mengikuti video programing zaman now`

console.info(multinine);
document.writeln("<pre>")
document.writeln(multinine);
document.writeln("</pre>")

document.write("</br>")

let value1 = parseInt("1");
let value2 = 1;
let sum = value1 + value2;

document.writeln(`<p> ${sum} </p>`)

document.writeln(`<p>${parseInt(1.1)} </p>`)
document.writeln(`<p>${parseFloat(1.1)} </p>`)
document.writeln(`<p>${Number(1.1)}</p>`)
document.writeln(`<p>${String(1.1)} </p>`)

let a = 1;
let b = 1;
let c = a.toString() + b.toString()
document.writeln(`<p> ${c} </p>`)

document.write("</br>")

document.writeln("<pre>")
document.writeln("Melakukan konversi string dan number")
document.writeln(`<img src="/gambar/Capture.PNG" alt="">`)
document.writeln("</pre>")

document.writeln("</br>")

//tipe data array menggunakan kurung kurawal "[]"

let arrayAngka = [1, 3, 5, 7, 9 ];
arrayAngka[2] = "naila";
delete arrayAngka[2];
arrayAngka[2] = 5;
arrayAngka[5] = 9;

console.table(arrayAngka);


let arrayKosong = [];

arrayKosong.push(11);
arrayKosong.push("khairul", "anwar");
arrayKosong.push("tanjung");
arrayKosong.push(1,2,3,4,5 );


console.table(arrayKosong);


document.writeln("</br>")

document.writeln("<pre>")
document.writeln("operasi array")
document.writeln(`<img src="/gambar/array.PNG" alt="">`)
document.writeln("</pre>")


//tipe data object sama seperti tipe data array yang membedakan hanya menggunakan kurung kurawal "{}" 

let arrayObjectKosong = {};

arrayObjectKosong["nama"] = "khairul anwar tanjung"
arrayObjectKosong["alamat"] = "medan"
arrayObjectKosong["jenis kelamin"] = "laki - laki"
arrayObjectKosong["umur"] = 30;

console.table(arrayObjectKosong);


// if expresion menampilkan data siswa 


let kelulusan = 75
// let namaSiswa = {}

let namaSiswa = [
    {"nama" : "khairul anwar tanjung", "nilai" : 80 }, 
    {"nama" : "andi surya", "nilai" : 65 },
    {"nama" : "ranti", "nilai" : 90 }
];

namaSiswa.forEach((siswa, index)=> {
    if(siswa.nilai > kelulusan) {
        console.table(siswa.nama + " lulus")
    }else{
        console.table(siswa.nama + " tidak lulus")
    }
});


// popup

// let input = prompt("Tulis nama anda di sini")

// if(input == ""){
//     confirm("anda belum menuliskan nama anda silahkan tuliskan nama anda terlebih dahulu, apakah anda ingin kembali ?")
// }else if(input == input){
//     alert(" Selamat Datang " + input)
// }else{
//     prompt("Tulis nama anda di sini")
// }
    
// Percabangan switch

let nilai = "E";

switch (nilai){
    case "A":
        document.writeln("<p>Anda lulus dengan baik</p>");
        break;
    case "B":
    case "C":
        document.writeln("<p>Anda lulus</p>");
        break;
    case "D":
        document.writeln("<p>Anda Tidak lulus</p>");
        break;
    default:
        document.writeln("<p>Mungkin Anda Sallah Jurusan</p>");
}   



if(nilai === "A"){
        document.writeln("<p>Anda lulus dengan baik</p>");
    }else if ( nilai === "B" && nilai === "C"){
        document.writeln("<p>Anda lulus </p>");
    }else if ( nilai === "D") {
        document.writeln("<p>Anda tidak lulus </p>");
    }else{
        document.writeln("<p>Mungkin Anda Salah Jurusan </p>");
    }
        

    // penggunaan Typeof gunanya untuk mengetahui tipe data

    let data = ["sepatu"];

    let typedata = typeof (data);{
        document.writeln(`<p>${typedata}<p>`);
    }

    //in oprator gunanya untuk mengecek apakah sebuah property ada didalam object atau tidak
    
document.writeln("<pre>")
document.writeln("<h3>in oprator</h3>")
document.writeln(`<img src="/gambar/2.PNG" alt="">`)
document.writeln("</pre>")

document.writeln("</br>")

document.writeln("<pre>")
document.writeln("Perlu diketahui")
document.writeln(`<img src="/gambar/3.PNG" alt="">`)
document.writeln("</pre>")

document.writeln("</br>")


let person = {
    firstname: "Khairul",
    middlename: "anwar"
};  

if("middlename" in person){
    alert(`<P> Hello ${person.fullname}</P>`);
} else {
    alert(`<P> Hello </P>`)
}

//ternary oprator

document.writeln("</br>")

document.writeln("<pre>")
document.writeln("<h3>Ternary oprator</p>")
document.writeln(`<img src="/gambar/4.PNG" alt="">`)
document.writeln("</pre>")

document.writeln("</br>")

let Nilai = 99;
ucapan = Nilai >= 80 ? "Selamat Anda Lulus": "Maaf Anda Tidak Lulus";

document.writeln(`<p>${ucapan}</p>`);

 
//oprator nullis cualising

//contoh sebelum menggunakan nullis coalising

let parameter;

let datta = parameter;
if(datta === undefined || datta === null){
    datta = "nilai default";
}

document.writeln(`<p>${datta}</p>`);

//penggunaanya oprator nullis cualising mempersingkat coding


datta = parameter ?? "nilai default"

document.writeln(`<p>${datta}</p>`);
