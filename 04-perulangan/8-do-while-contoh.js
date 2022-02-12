/**
 * Buatlah sebuah program yang akan menghitung berapa kali
 * harus melempar dadu sehingga mendapatkan angka 6.
 * Tampilkan hasil perhitungan tersebut pada terminal
 */
/**
 * PSEUDOCODE

 */

var hasilLempar = 0;
var totalLempar = 0;

do {
  hasilLempar = Math.ceil(Math.random() * 6);
  console.log("lemparan ke =", totalLempar + 1, "hasil lempar =", hasilLempar);
  totalLempar++;
} while (hasilLempar !== 6);
console.log("total lempar dadu biar dapat 6 =", totalLempar, "kali");
