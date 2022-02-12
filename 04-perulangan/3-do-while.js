// pengecekan kondisi di while loop dilakukan di awal sebelum perulangan dilakukan
// sedangkan di do while loop dilakukan setelah perulangan dilakukan
// di do while loop, minimal pasti sekali perulangan dilakukan walaupun kondisi tidak bernilai true

let counter = 1;
do {
  console.log(`Perulangan ke ${counter}`);
  counter++;
} while (counter <= 10);
