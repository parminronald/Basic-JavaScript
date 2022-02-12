// perbedaan if if dan if else if

/*
IF - IF
Pengecekan akan dilakukan pada semua if.
*/

var angka = 15

// if (angka % 3 === 0){
//     console.log('Line 5');
// }

// if (angka % 5 === 0){
//     console.log('Line 9');
// }

/*
IF - ELSE
Pengecekan akan dilakukan selama belum ditemuan ekspresi yang bernilai true
Apabila sudah ditemukan ekspresi yang bernilai true, pengecekan akan dihentikan
*/

// if (angka % 3 === 1){        // false
//     console.log('Line 13');
// } else if (angka % 3 === 0){ // true
//     console.log('Line 15');
// } else if (angka % 5 === 0){ // true
//     console.log('Line 16');
// } else {                     // other
//     console.log('gak ada yg bener');
// }

/**
 * Sebuah bengkel membutuhkan program untuk menghitung tarif berdasarkan
 * service yang diberikan kepada pelanggan.
 * Tarif dari service yang diberikan adalah sebagai berikut:
 *  - Ganti oli: 10000
 *  - Ganti ban: 7500
 *  - Pompa ban: 2500
 *  - Tambal ban: 25000
 * 
 * Konsumen dapat meminta lebih dari satu jenis service kepada bengkel tersebut
 */

var gantiOli = false
var gantiBan = false
var pompaBan = false
var tambalban = true

var total = 0
// code here
// if (gantiOli === true){
//     total += 10000
// }
// if (gantiBan === true){
//     total += 7500
// }
// if (pompaBan === true){
//     total += 2500
// }
// if (tambalban === true){
//     total += 25000
// }

/*
= (assignment)
== (comparison value) // '2' == 2
=== (comparison value and type/strict comparison) // '2' != 2
*/

// console.log(total);

/*
Nested Conditionals
Statement conditional bisa terdapat di dalam statement conditional lainnya.

if (expression1){
    if (expression2){
        // Statement to execute
    } else {
        // Statement to execute
    }
} else {
    if (expression3){
        // Statement to execute
    } else {
        // Statement to execute
    }
}

switch (expression1){
    case a:
        switch (expression2){
            case a1:
                // statement to execute
                break
            case a2:
                // statement to execute
                break
        }
        break
    case b:
        switch (expression3){
            case b1:
                //statement to execute
                break
            case b2:
                //statement to execute
                break
        }
        break
}
*/

/**
 * Kegiatan seorang anak kost dapat ditentukan berdasarkan relasi
 * antara rasa lapar dan uang yang dimilikinya saat itu.
 * Relasi tersebut adalah sebagai berikut:
 *  - Jika lapar, maka anak kost akan:
 *      - kalau memiliki uang, Makan
 *      - kalau tidak memiliki uang, Tidur
 *  - Jika tidak lapar, maka anak kost akan:
 *      - kalau memiliki uang, Nyemil
 *      - kalau tidak memiliki uang, Minum air
 * 
 * Buatlah program untuk mensimulasikan kegiatan pengembara tersebut
 */

/*
data primitif JavaScript
1. string -> 'budi', 'martin', 'roim'
2. number -> 17, 200
3. boolean (true, false)
4.
5.

*/

var lapar = true
var uang = true

// code here

if (lapar === true){
    if (uang === true){
        console.log('Makan');
    } else {
        console.log('Tidur');
    }
} else{
    if (uang === true){
        console.log('Nyemil');
    } else {
        console.log('Minum');
    }
}
