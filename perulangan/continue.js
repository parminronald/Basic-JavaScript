// continue digunakan untuk menghentikan perulangan saat ini
// lalu melanjutkan ke perulangan selanjutya
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`Perulangan ganji: ${i}`);
}
