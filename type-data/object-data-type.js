//Tipe data object, type data mirip dengan array
//yang membedakan adalah index type data object bisa menggunakan string
// index di object biasaya di sebut attributs datu properties, bikan index
const orang = {};
//ubah property/attribute
orang["nama"] = "Alex";
orang["alamat"] = "Cisauk";
orang["umur"] = 30;
console.table(orang);
// untuk menghapus
delete orang("umur");
// bisa juga
const person = {
  nama: "Alex",
  alamat: "Cisauk",
  umur: 30,
};
console.info(`Nama : ${person.nama}`);
console.info(`Alamat : ${person.alamat}`);
console.info(`Umur : ${person.umur}`);
