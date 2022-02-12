// Function rest parameter, bila parameter lebih dari satu, rest parameter taruh paling belakang
// dengan titik 3 contoh : ...nama_parameter
function hitung(buah, ...data) {
  //...data akan merubah menjadi Array
  let total = 0;
  for (const items of data) {
    total += items;
  }
  console.log(`Nama ${buah} is ${total}`);
}
var arr1 = [10, 10, 10, 10, 10, 30];
hitung("Mangga", 10, 10, 10, 10, 10, 30);
//
hutung("Mangga", ...arr1); //spread syntax ...nama_Array
