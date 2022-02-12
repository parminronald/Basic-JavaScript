/*
Bentuk Dasar
switch (expression) {
    case nilai1:
        // Statement yang akan dieksekusi
        // Statemen lain
        break
    case nilai2:
        // Statement yang akan dieksekusi
        break
}
*/

// var lampuLaluLintas = 'biru'

// switch (lampuLaluLintas){
//     case 'merah':
//         console.log('berhenti');
//         break
//     case 'kuning':
//         console.log('hati-hati');
//         break
//     case 'hijau':
//         console.log('boleh jalan');
//         break
//     default:
//         console.log('lampu rusak, benering dong bang!');
// }

// var fruits = 'Orange'

// switch (fruits){
//     case 'Mango':
//         console.log('price is 10000');
//         break
//     case 'Orange':
//     case 'Semangka':
//     case 'Jambu':
//     case 'Apple':
//         console.log('price is 20000');
//         break
// }

/**
 * Berdasarkan suatu angka 1 hingga 5, Tampilkan output sebagai berikut:
 *      1: ★☆☆☆☆
 *      2: ★★☆☆☆
 *      3: ★★★☆☆
 *      4: ★★★★☆
 *      5: ★★★★★
 *
 * kserjakan dengan statemen switch-case.
 */

var input1 = 10;
// Code here
// switch (input1){
//     case 1:
//         console.log('★☆☆☆☆');
//         break
//     case 2:
//         console.log('★★☆☆☆');
//         break
//     case 3:
//         console.log('★★★☆☆');
//         break
//     case 4:
//         console.log('★★★★☆');
//         break
//     case 5:
//         console.log('★★★★★');
//         break
//     default:
//         console.log('★★★★★★★');
// }

/*
Apabila tidak ada case yang cocok dengan hasil dari expression, maka
statement yang akan dieksekusi adalah statement yang ada pada default.

switch (expression){
    case nilai1:
        // statemen yang akan dieksekusi
        break
    case nilai2:
        // statemen yang akan dieksekusi
        break
    default
        // statemen yang akan dieksekusi
}

*/

/**
 * Berdasarkan suatu angka 1 hingga 5, tampilkan output sebagai berikut
 *  1: ★☆☆☆☆
 *  2: ★★☆☆☆
 *  3: ★★★☆☆
 *  4: ★★★★☆
 *  5: ★★★★★
 *
 * Apabila angka tersebut diluar range 1 hingga 5, tampilkan 'Invalid'.
 * Kerjakan dengan statement switch-case.
 */

var input2 = 10;
// Code here
// switch (input2) {
//     case 1:
//         console.log('★☆☆☆☆');
//         break
//     case 2:
//         console.log('★★☆☆☆');
//         break
//     case 3:
//         console.log('★★★☆☆');
//         break
//     case 4:
//         console.log('★★★★☆');
//         break
//     case 5:
//         console.log('★★★★★');
//         break
//     default:
//         console.log('Invalid');
// }

/*
switch (expression){
    case nilai1:
        // statement yang akan dieksekusi
    case nilai2:
        // statement yang akan dieksekusi
}
*/

/**
 * Berdasarkan suatu angka 1 hingga 5, tampilkan output sebagai berikut
 *  1: ★
 *  2: ★★
 *  3: ★★★
 *  4: ★★★★
 *  5: ★★★★★
 *
 * Apabila angka tersebut di luar range 1 hingga 5, tampilkan 'Invalid'.
 * Kerjakan dengan statement switch-case tanpa menggunakan statement
 * break.
 * Amati apa yang terjadi
 */

var input3 = 1;
// Code here
switch (input3) {
  case 1:
    console.log("★☆☆☆☆");

  case 2:
    console.log("★★☆☆☆");

  case 3:
    console.log("★★★☆☆");

  case 4:
    console.log("★★★★☆");

  case 5:
    console.log("★★★★★");

  default:
    console.log("Invalid");
}
