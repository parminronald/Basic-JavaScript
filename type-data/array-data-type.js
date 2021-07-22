// Array dapat menampung semua type data (string,number dll)
//operasi di array
//array.push(value);    -->menambahkan data ke array
//array.langth          --> mendapatkan panjang array
//array[index]          --> mendapatkan data di posisi index
//array[index]=value    -->mengubah data di posisi index
//delete array[index]   --> menghapus data di posisi index, namun index tidak bergeser
//Method sort()
var arrProducts = [];
const arrayTes = ["Alex", "Ronald", "Suparmin", 100, true];
// array.push(value);
arrProducts.push = ["Laptop", "Monitor", "Keyboard", "Mouse"]; //menambah data di array
//console.table(arrProducts);
console.log(arrayTes[2]); // Hasilya=Monitor
//arrProducts[2] = "Programmer"; //mengubah data di posisi index
console.table(arrProducts);
console.log(arrProducts.length);
//Kita dapat menghapus data dengan nomer indeks tertentu dengan delete.
//Kekurangan dari delete, ia akan menciptakan ruang kosong di dalam array.
//delete arrProducts[3]; // menghapus value array pada posisi index
//console.table[arrProducts];
//arrProducts.push = "Flas Disk"; //method push() akan menambahkan data ke dalam array dari belakang
//console.table(arrProducts);

//PERLU DI INGAT
// data dalam array tidak ada batasanya harus data apa
// jadi kita bisa memasukan data apapun dalam array
// bahkan kita juga bisa memasukan array ke dalam array jika kita mau
// index di array tipe dataya number
// kalau di paksa dirubah string maka java script akan merubah menjadi object ini berbahaya
