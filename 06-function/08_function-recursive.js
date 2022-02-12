// Penyelesaian menggunakan perulangan
function factorial(value) {
  let resolt = 1;
  for (let i = 1; i <= value; i++) {
    resolt *= i;
  }
  return resolt;
}
console.log(factorial(7));
// Penyelesaian menggunakan recursive
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}
console.log(factorialRecursive(5));
//Carakerja recursi (contoh factorial 5)
// 5 * factorialRecursive(4)
// 5 * 4 * factorialRecursive(3)
// 5 * 4 * 3 factorialRecursive(2)
// 5 * 4 * 3 * 2 factorialRecursive(1)
// 5 * 4 * 3 * 2 * 1
