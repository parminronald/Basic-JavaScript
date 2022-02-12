/**
 * concat string
 * console.log('volunteer' + 'map')
 * console.log('volunteer' + ' ' + 'map')
 * 
 * akses index
 * length string
 */

var gen = 'vom abrakadar ddbrae dfhahwkhjhdfo'
// console.log(gen[0]);
// console.log(gen[1]);
// console.log(gen[2]);
// console.log(gen[3]);
// console.log(gen[4]);

// console.log(gen.length);
// console.log(gen[34]);

// var lastIndex = gen.length - 1
// console.log(gen[lastIndex]);

// console.log(gen[gen.length - 2]);

// gen = ''
// console.log(gen.length);

// gen = '     '
// console.log(gen);
// console.log(gen.length);

// console.log('volunteer' + 'map')
// console.log('volunteer' + ' ' + 'map')
// console.log('volunteer', 'map');
// console.log('volunteer' + 2021);
// console.log('volunteer', 2021);

/*
substring
str.substring(indexStart, [indexEnd])

indexStart: The index of the first character to include in the returned substring.
indexEnd: The index of the first character to exclude from the returned substring. (optional)
*/

var string = '0123456789'
// tampilkan 456
console.log(string.substring(4, 7));
// tampilkan 789
console.log(string.substring(7));
// console.log(string.substring(7, string.length));