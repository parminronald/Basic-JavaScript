var huruf = "JAVA";
var tmp;
for (let i = huruf.length; i >= 0; i--) {
  //console.log(huruf[i]);
  //console.log(huruf.charAt(i));
  tmp = "";
  tmp = huruf.charAt(i);
  if (i >= 0) {
    console.log(tmp);
  }
}
