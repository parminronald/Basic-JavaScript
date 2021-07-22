// membuat array
var products = ["Senter", "Radio", "Antena", "Obeng"];
// menggunakan perulangan untuk mencetak semua isi array
for (let i = 0; i < products.length; i++) {
  //console.log(`${i}. ${products[i]}`);
}
//Pada contoh di atas, kita menggunakan properti length untuk mengambil panjang array
// property length akan bernilai 4
// nilai dari property length untuk membatasi perulangan
// menggunakan perulangan untuk mencetak semua isi array
products.forEach((data) => {
  console.log(`${data}`);
}); //Hasilnya akan sama seperti di atas.
