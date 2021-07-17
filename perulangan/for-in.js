// for in merupakan perulangan for yang digunakan untuk mengiterasi 
// seluruh data property di object atau index di array

const person = {
    firstName: "Alex",
    midleName: "Ronald",
    lastName: "Suparmin"
}; // ini object person
for (const property in person){
    console.log(`${property}:${person[property]}`);
}