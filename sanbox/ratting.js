var counter = 0;
while (true) {
  counter++;
  var bintang = "*".repeat(counter);
  console.log(bintang);
  if (counter >= 10) {
    break;
  }
}
