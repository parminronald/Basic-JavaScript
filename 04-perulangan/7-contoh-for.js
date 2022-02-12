/**
 * Diberikan sebuah string input. Tampilkan per-dua karakter dari
 * string tersebut ke bawah pada terminal.
 * Buatlah pseudocode beserta kode programnya
 * 
 * Contoh:
 *  Input       : 'Hello World'
 *  Output      : 'He'
 *                'll'
 *                'o '
 *                'Wo'
 *                'rl'               
 *                'd'
 */

/**
 * PSEUDOCODE
    STORE input WITH ANY STRING
    FOR i FROM 0 TO input LENGTH INCREMENT BY 2
        DISPLAY input INDEX i CONCAT input INDEX i + 1
    END FOR
 */

var input = 'Hello World';
// console.log(input[10]);
// console.log(input.length); // panjang karakter = 11
// console.log(input[0]+input[0+1]);
// Yout code here
for (var i = 0; i < input.length; i +=2){
    if (input[i + 1] === undefined){
        console.log(input[i]);
    } else {
        console.log(input[i] + input[i + 1]);
    }
}

// for (var i = 0; i < input.length; i +=2){
//     if (input[i + 1] === undefined){
//         console.log(input[i]);
//         break
//     } 
//     console.log(input[i] + input[i + 1]);
// }