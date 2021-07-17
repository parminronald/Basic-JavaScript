const nilai = 75;
let ucapan;

if (nilai >= 75) {
  ucapan = "Selamat anda lulus";
} else {
  ucapan = "Silahkan coba lagi";
}
console.log(`<p>${ucapan}</p>`);
// !Ternary Operator --> lebih simple
// bisa untuk penyelesaian kondisi yang simple
// kalau hasil bernilai true "Selamat anda lulus" akan di cetak, begitu sebalikya bila false

const ucapan2 = nilai >= 75 ? "Selamat anda lulus" : "Silahkan coba lagi";
console.log(`<p>${ucapan2}</p>`);
