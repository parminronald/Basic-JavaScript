//Tipe data object, type data mirip dengan array
//yang membedakan adalah index type data object bisa menggunakan string
// index di object biasaya di sebut attributs data properties, bikan index
var orang = {};
//ubah property/attribute
orang["nama"] = "Alex";
orang["alamat"] = "Cisauk";
orang["umur"] = 30;
console.table(orang);
delete orang("umur"); // untuk menghapus
// cara membuat object
var person = {
  // Property
  nama: "Alex",
  alamat: "Cisauk",
  umur: 30,
};
console.info(`Nama : ${person.nama}`);
console.info(`Alamat : ${person.alamat}`);
console.info(`Umur : ${person.umur}`);
