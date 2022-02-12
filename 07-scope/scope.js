// variable global
let counter = 0;

function first() {
  //Lokal scobe first
  let firstVariable = "Variable First";
  function firstNastate() {
    console.log(firstVariable);
  }
  firstNastate(); //panggil function firstNastate()
}
first();
