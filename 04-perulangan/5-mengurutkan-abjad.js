/**
 * Buatlah sebuah program yang akan mengurutkan huruf dari sebuah
 * input string
 * 
 * Contoh 1:
 *      - Input     : java
 *      - Output    : aajv
 * 
 * Contoh 2:
 *      - Input     : fedcba
 *      - Output    : abcdef
 */

var input = 'fedcba'
var kamus  = 'abcdefghijklmnopqrstuvwxyz'
var output = ''

for (var i = 0; i < kamus.length; i++){             // looping luar
    // console.log("index", i, kamus[i]);
    for (var j = 0; j < input.length; j++){         // looping dalam
        // console.log("i ke", i, "j ke",j, kamus[i], input[j]);
        if (kamus[i] === input[j]){
            // console.log(kamus[i], input[j]);
            output += kamus[i]
        }
    }
}
console.log(output);


