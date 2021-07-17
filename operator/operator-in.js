//untuk mengecek apakah property tersebut ada di object
const person = {
  firstName: "Eko",
  lastName: "Alex",
};
if ("fistName" in person) {
  console.log(`Hello ${person.firstName}`);
} else {
  console.log("Hello");
}