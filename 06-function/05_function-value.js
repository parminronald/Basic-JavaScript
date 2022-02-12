function sayHello(nama) {
  console.log(`Hello ${nama}`);
}
function giveMeName(callback) {
  callback("Ronald");
}
giveMeName(sayHello); //Function value dari function
sayHello("Alex");
// function di masukan ke variable
var say = sayHello;
say("Parmin"); // cara memanggil
// var number = Math.floor(Math.random() * 9);
// console.log(number);
