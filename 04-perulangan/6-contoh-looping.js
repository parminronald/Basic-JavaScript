// console.log("Palang Merah Indonesia");
// console.log("Palang Merah Indonesia");
// console.log("Palang Merah Indonesia");
// console.log("Palang Merah Indonesia");
// console.log("Palang Merah Indonesia");
// console.log("Palang Merah Indonesia");
// console.log("Palang Merah Indonesia");
// console.log("Palang Merah Indonesia");
// console.log("Palang Merah Indonesia");
// console.log("Palang Merah Indonesia");

// for (var i =1; i <= 10; i++){   // increament/naik
//     console.log("i ke = ",i, ", Palang Merah Indonesia");
// }

for (var i =1; i <= 10; i+=2){  // increament/naik by 2
    // console.log("i ke = ",i, "Palang Merah Indonesia");
}
console.log("---------------");
// for (var j =10; j > 0; j--){    // decreament/mundur
//     console.log("j ke = ",j, ", Palang Merah Indonesia");
// }
for (var j = 10; j >= 0; j-=2){    // decreament/mundur
    // console.log("j ke = ",j, ", Palang Merah Indonesia");
}
// decreament 
// j--/i-- (j = j - 1) atau j-=2 (j = j - 2) atau j-=3 dst

// increament
// i++/j-- (i = i + 1) atau i+=2 (i = i + 2)
// i *= 2
// i /= 2

//// contoh while

var i = 0;
while (i < 0){
    // console.log(i);
    // console.log("PMI")
    i++
}

/// contoh do while
var i = 0;
do {
    // console.log(i);
    // console.log("Hello");
    i++;
} while (i < 0);

/// break
for (var i = 0; i < 10; i++) {
    // console.log("Hello");
    break;
}

for (var i = 0; i < 10; i++) {
    if (i === 3){
        break;
    }
    // console.log(i, "Hello");
}

for (var i = 0; i < 10; i++) {
    if (i === 3){
        // console.log(i, "Hello");
    }
    continue;
}

// infinite 
var j = 0;
for (var i = 0; i < 10; i++) {
//   console.log(i);
}