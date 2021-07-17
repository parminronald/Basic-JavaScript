// String + number =string
// harus di converd ke number
// parseInt(string)     --> conversi string ke number (bilangan bulat)
// parseFloat(string)   --> conversi string ke number (Bilangan pecahan)
// number(string)       --> conversi string ke number ( bilangan bulat dan pecahan)
// number.toString()    --> conversi number ke string

const value1 = "1";
const value2 = 1;
const hasil = value1 + value2;

const nilai1 = parseInt("1"); //conversi string ke number (bilangan bulat)
const nilai2 = parseFloat("1.1"); // conversi string ke number (bilangan pecahans)
const hasil2 = nilai1 + nilai2;
console.log(hasil2);
console.log(`<p>${Number("1.1")}</p>`);

const a = 1;
const b = 1;
const hasil3 = a.toString + b.toString;
console.log(hasil3);
// NaN = Not a Number   --> kalau salah conversi akan muncul NaN
console.log(`<p>${parseInt("1.1")}</p>`);
console.log(`<p>${parseFloat("1.1")}</p>`);
console.log(`<p>${Number("1.1")}</p>`);
// NaN = Not a Number   --> kalau salah conversi akan muncul NaN
console.log(`<p>${parseInt("Salah")}</p>`);
console.log(`<p>${parseFloat("1.1eko")}</p>`); //kalau depanya angka Js masih bisa baca
console.log(`<p>${Number("1.1")}</p>`); //Number tidak montolerir

const first = Number("Salah"); // Hasilya NaN
const totalNumber = first + 100;
console.log(totalNumber);
// isNaN -->untuk mengecek Nilai tersebut Number atau bukan
// bila Bukan Number maka hasilya true
console.log(`<p>${isNaN(first)}</p>`); //true
console.log(`<p>${isNaN(100)}</p>`); // false
