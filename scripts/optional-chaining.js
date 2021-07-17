//!optional chaining

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// expected output: undefined
console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
const person;
//bila .address di person nullis
let country = person?.address?.country;
console.log(`SUKSES`);
console.log(`${country}`);
console.log(`SUKSES`);