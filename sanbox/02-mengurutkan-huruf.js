// Mengurutkan huruf ASC
// Output = aajv
var input = "java";
var kamus = "abcdefghijklmnopqrstuvwxyz";
var output = "";
for (var i = 0; i < kamus.length; i++) {
  // console.log(`index ${i} ${kamus[i]}`);
  for (var j = 0; j < input.length; j++) {
    if (kamus[i] === input[j]) {
      console.log(`${kamus[i]} ${input[j]}`);
      output += kamus[i];
    }
  }
}
