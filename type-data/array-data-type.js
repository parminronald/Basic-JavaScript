// Array dapat menampung semua type data (string,number dll)
const arrayTampung = [];
const arrayTes =["Alex", "Ronald", "Suparmin",100, true];
//menambah data di array
arrayTampung.push=["Belajar", "JavaScript"];
//arrayTampung.push=["Sendiri"];
console.table(arrayTampung);
console.table(arrayTes);
//operasi di array
//array.push(value);    -->menambahkan data ke array
//array.langth      --> mendapatkan pantang array
//array[index]      --> mendapatkan data di posisi index
//array[index]=value    -->mengubah data di posisi index
//delete array[index]   --> menghapus data di posisi index, namun index tidak bergeser
console.log(arrayTampung[2]);
console.log(arrayTampung[1]);
console.log(arrayTampung[0]);
//mengubah data di posisi index
arrayTampung[2]="Programmer";
console.table(arrayTampung);
// menghapus value array
delete arrayTampung[3];
console.table[arrayTampung];
arrayTampung.push="tambah data lagi";
console.table(arrayTampung);
//PERLU DI INGAT
// data dalam array tidak ada batasanya hasus data apa
// jadi kita bisa memasukan data apapun dalam array
// bahkan kita juga bisa memasukan array ke dalam array jika kita mau
// index di array tipe dataya number
// kalau di paksa dirubah string maka java script akan merubah menjadi object ini berbahaya