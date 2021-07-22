//! for(init statement;kondisi;post statement){
//!  block perulangan
//! }
// 1. init statement akan dieksekusi hanya sekali di awal sebelum perulangan
// 2. kondisi akan dilakukan pengecekan dalam setiap perulangan
// 3. post statement akan dieksekusi setiap kali diakhir perulangan
//
for (let counter = 1; counter <= 10; counter++) {
  console.log(`Perulangan ke ${counter}`);
}
let alphabet = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789";
let pass = []; //remember to declare pass as an array
let alphaLength = alphabet.length - 1; //put the length -1 in cache
for (let i = 0; i < alphaLength; i++) {
  let n = Math.random(alphaLength);
  //Math.rand();
  pass.push(n);
}
console.table(pass);
console.log(alphaLength);
