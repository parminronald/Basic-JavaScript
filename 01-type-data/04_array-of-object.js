// Kita dapat merepresentasikannya array dengan cara ini:
let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
];
// Objek ini mewakili sebuah mobil. Ada banyak jenis dan warna mobil,
// setiap objek kemudian mewakili mobil tertentu.
// object car
let car = {
  color: "red",
  type: "Kijang",
  registration: new Date("2016-05-02"),
  capacity: 2,
};
//cars.unshift(car); //Menambahkan 1 boject paling belakang
// cars.push(car); // Menambahkan 1 object paling depan
cars.splice(2, 0, car); // Menambahkan 1 object
console.log(cars);

// let mobil = cars.find((car) => car.color === "red" && car.type === "cabrio");
// console.log(mobil);
// let redCars = cars.filter((car) => car.color === "purple");
// console.log(redCars);
// let sizes = cars.map((car) => {
//   if (car.capacity <= 3) {
//     return "small";
//   }
//   if (car.capacity <= 5) {
//     return "medium";
//   }
//   return "large";
// });
// console.log(sizes);

// let carsProperties = cars.map((car) => {
//   let properties = {
//     capacity: car.capacity,
//     size: "large",
//   };
//   if (car.capacity <= 5) {
//     properties["size"] = "medium";
//   }
//   if (car.capacity <= 3) {
//     properties["size"] = "small";
//   }
//   return properties;
// });
// console.log(carsProperties);
// // Sort an array by a property - Array.sort
// let sortedCars = cars.sort((c1, c2) =>
//   c1.capacity < c2.capacity ? 1 : c1.capacity > c2.capacity ? -1 : 0
// );
// console.log(sortedCars);
