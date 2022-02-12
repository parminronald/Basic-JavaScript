// var barang = ["Mouse", "Kayboard", "Laptop"];
// function showBarang() {
//   for (let i = 0; i < barang.length; i++) {
//     console.log(`Barang ke ${i} ${barang[i]}`);
//   }
// }

// showBarang();

// function perKalian(param1, param2) {
//   var hasil = param1 * param2;
//   console.log(hasil);
// }
// perKalian(4, 10);

// Contoh Function return value
function isContains(Array, Search) {
  for (const element of Array) {
    if (element === Search) {
      return true;
    }
  }
  return false;
}
const array = [10, 32, 245, 36, 35, 36, 38, 32];
const search = 36;
const found = isContains(array, search);//bila nilai search ada di array maka hasilya true
console.log(found); 
