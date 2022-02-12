// function anonymous, harus di taruh di variable atau parameter
// ini contoh anonymous yang di masukan dalam variable
const say = function (name) {
  console.log(`Name: ${name}`);
};
// panggil variable dan beri parameter
say("Parmin");
// contoh anonymous fuction di masukan parameter
function giveMeName(callback) {
  callback("Ronald");
}
giveMeName(function (nama) {
  console.log(`Hi ${nama}`); // mengambil hasil dari function giveMeName
});
