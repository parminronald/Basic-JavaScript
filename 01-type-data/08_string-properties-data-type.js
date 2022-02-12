//! karakter pada string dapat di akses menggunakan index atau posisi, dimulai dari 0
var title = "Ronald Suparmin";
console.log(title[5]); // hasilya d

console.log(title[title.length - 1]); // Mengambil huruf terakhir dari string
// Memaksa perubahan string pada index 0
title[0] = "P";
console.log(title); // tidak ada perubahan
//menggabungkan string dengan simbol +
title = title + " " + "is created javascript language";
console.log(title);

var nama =
  "This tutorial will take a quick look at the most important JavaScript data types";
console.log(`panjang string name:${nama.length} karakter`); //! Mengembalikan panjang dari string,perhitungan mulai dari 1

console.log("i am a string".charAt(2)); //! mengembalikan karakter pada index yang di inginkan

var string1 = "Good";
var string2 = "Luck";
console.log(string1.concat(string2)); //! menggabungkan string menjadi string baru

//! mengembalikan index dari string/karakter yang dicari,
//! yang pertama kali ditemukan, atau - 1 bila tidak ditemukan
var text = "dung dung ces!";
console.log(text.indexOf("dung")); //hasilya 0
console.log(text.indexOf("u")); // hasilya 1 (akan mengambil string pertama)
console.log(text.indexOf("jdung")); //hasilya -1 (karena string yang dicari tidak ada)
//
var car1 = "Lykan hypersport";
var car2 = car1.substr(6); //! Mengambil string dari index ke 6 [hasil= hypersport]
console.log(car2);
// .substr
var motor2 = car1.substr(2, 3); //! Mengambil string dari index ke 2 sebanyak 3 karakter [hasil= kan]
console.log(motor2);
console.log(car1.toUpperCase()); //! Merubah string menjadi huruf besar semua
console.log(car1.toLowerCase()); //! Merubah string menjadi huruf kecil semua
//! Mengembalikan string baru yang sudah dihapus karakter whitespace pada awal dan akhir string
var strname = "     aku anak indonesia ";
console.log(strname.length); // Sebelum di hapus karakter whitspace awal dan akhir
var newStrname = strname.trim();
console.log(strname.trim());
console.log(strname);
console.log(newStrname.length); // setelah dihapus karakter whitspace awal dan akhir
//! Typecasting berarti merubah type data ke type data yang lain
//! Pada JavaScript Typecasting sering dilakukan pada string
//! Baik dari suatu type data menjadi string atau sebalikya
var int = "13";
var real = "13.87";
var arr = [1, 3, 5, 7];

var strInt = String(int);
var strReal = String(real);
var strArr = String(arr);
console.log(strInt);
console.log(strReal);
console.log(strArr);
//! konversi type data lain menjadi string .toString()
var number = 34;
console.log(number.toString());
var array = [1, 2, 3, 4];
console.log(array.toString());
//! Fungsi gobal Number() mengkonversi string menjdi angka
//! dengan titik bila angka adalah bilaangan desimal
//! Bila parameter berisi karakter selain angka dan/atau titik, Number() akan mengembalikan NaN (Not a Number)
var number1 = Number("90");
var number2 = Number("1.23");
var number3 = Number("2 3");

var int = "98";
var real = "56.74";
var strInt_1 = parseInt(int);
