// function generator
// tambahkan *

function* createNames() {
  yield "Alex";
  yield "Ronald";
  yield "Suparmin";
}
// kita iterasi (data generator hanya bisa di iterasi)
// data generator tidak bisa di akses menggunakan index
const names = createNames();
for (const name of names) {
  console.log(name);
}
/* --------Sifatya Lazy----------------------- */
function* buatGanjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      yield i;
    }
  }
}
/* --------Sifatya Eager----------------------- */
function* buatGanjilArray(value) {
  const result = [];
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.log(`yield ${i}`);
      result.push(i);
    }
  }
  return result;
}
//const angkaGanjil = buatGanjilArray(100);
const angkaGanjil = buatGanjil(100);
// kita iterasi
// for (const angka of angkaGanjil) {
//   console.log(angka);
// }
console.log(angkaGanjil.next.value);
