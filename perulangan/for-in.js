// for in merupakan perulangan for yang digunakan untuk mengiterasi
// seluruh data property di object atau index di array

var person = {
  firstName: "Alex",
  midleName: "Ronald",
  lastName: "Suparmin",
}; // ini object person
for (let property in person) {
  console.log(`${property}:${person[property]}`);
}
