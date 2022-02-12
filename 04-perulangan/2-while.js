// while loop adalah versi perulangan yang lebih sederhana dibanding for loop
// while, hanya terdapat kondisi perulangan, tanpa ada init statement dan post statement
// bila kita hanya perlu kondisi untuk perulangan gunakan while
// ! while tepat untuk digunakan pada pengulangan dimana kita hanya tahu kondisi berhentinya saja,
// ! tanpa mengetahui berapa banyak pengulangan akan dilakukan.
let counter = 0;
while (counter <= 10) {
  console.log(`Perulangan ke ${counter}`);
  counter++;
}
