// Membalik kata
var huruf = "Palang Merah";
var tmp = "";
for (let i = huruf.length; i >= 0; i--) {
  tmp = tmp += huruf.charAt(i);
}
console.log(tmp);
