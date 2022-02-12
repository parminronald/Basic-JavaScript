//
function hitung(buah, ...data) {
  //...data akan merubah menjadi Array
  let total = 0;
  for (const items of data) {
    total += items;
  }
  console.log(`Nama ${buah} is ${total}`);
}
var arr1 = [10, 10, 10, 10, 10, 30];
//
hutung("Mangga", ...arr1); //spread syntax ...nama_Array
