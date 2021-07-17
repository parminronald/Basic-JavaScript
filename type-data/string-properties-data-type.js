//! karakter pada string dapat di akses menggunakan index atau posisi, dimulai dari 0
var title = "Ronald Suparmin";
console.log(title[5]); // hasilya d
// Mengambil huruf terakhir dari string
console.log(title[title.length -1]); //hasilya n
// Memaksa perubahan string pada index 0
title[0]="P";
console.log(title); // tidak ada perubahan
//menggabungkan string dengan simbol +
title = title + " " + "is created javascript language";
console.log(title);
//! Mengembalikan panjang dari string,perhitungan mulai dari 1
var nama="This tutorial will take a quick look at the most important JavaScript data types";
console.log(`panjang string name:${nama.length} karakter`);
// mengembalikan karakter pada index yang di inginkan
console.log("i am a string".charAt(2));
//menggabungkan string menjadi string baru
var string1="Good";
var string2="Luck"
console.log(string1.concat(string2));
//mengembalikan index dari string yang dicari
var text = "dung dung ces!";
console.log(text.indexOf("dung")); //hasilya 0
console.log(text.indexOf("u")); // hasilya 1 (akan mengambil string pertama)
console.log(text.indexOf("jdung")); //hasilya -1 (karena string yang dicari tidak ada)
//
var car1="Lykan hypersport";
var car2= car1.substr(6);
console.log(car2);
// .substr
var motor2 = car1.substr(2,3);// hasilya kan
console.log(motor2);
// toUpperCase
console.log(car1.toUpperCase());
// toLowerCase
console.log(car1.toLowerCase())

