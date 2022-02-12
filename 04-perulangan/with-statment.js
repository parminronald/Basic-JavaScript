// Object person
const person = {
  firstName: "Alex",
  middleName: "Ronald",
  lastName: "Suparmin",
};
// biasaya kita mengaccess seperti berikut
// console.log(person.firstName);
// console.log(person.midleName);
// console.log(person.lastName);

//Cara access menggunakan with {Tidak di rekomendasikan}
with (person) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}
