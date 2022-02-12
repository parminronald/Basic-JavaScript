var counter = 5;
var bintang = "";
// while (true) {
//   counter++;
//   bintang += "*";
//   console.log(bintang);
//   if (counter >= 5) {
//     break;
//   }
// }
// while (counter >= 0) {
//   counter--;
//   bintang += "*";
//   console.log(bintang);
//   if (counter <= 0) {
//     break;
//   }
// }
// for (let i = 1; i <= 4; i++) {
//   // Perulangan luar
//   for (let j = 1; j <= 2; j++) {
//     // Perulangan dalam
//     console.log(`Hasil J: ${j}`);
//   }
//   //console.log(`Hasil i: ${i}`);
// }
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(i * j + " ");
  }
}
