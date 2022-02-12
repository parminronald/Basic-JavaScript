/*
Math
Built-in functions yang umum digunakan dari Math adalah:
floor: Pembulatan ke bawah
ceil: Pembulatan ke atas
round: 
    - Apabila bagian desimal dari sebuah angka >= 0.5, maka dilakukan pembulatan ke atas.
    - Apabila bagian desimal dari sebuah angka < 0.5, maka dilakukkan pembulatan ke bawah.
*/

// var number = 3.4;
// console.log(Math.floor(number), 'floor');
// console.log(Math.ceil(number), 'ceil');
// console.log(Math.round(number), 'round');
// console.log(Math.random(), 'round'); // Output: 0 (termasuk) hingga 1 (tidak termasuk)

/**
 * Buat kode program untuk memberikan angka random dari 0 - 9
 */

// code here

// console.log(Math.floor(Math.random()*10));

// console.log(Math.random());

/**
 * Buat kode program untuk memberikan angka random dari 1 - 10
 */

// code here

console.log(Math.ceil(Math.random() * 5));
console.log(Math.floor(Math.random() * 5) + 1);
