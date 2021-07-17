//tepeof untuk mengecek tepy data
// Undefined    --> "undifined"
// Null     --> "object"
// Boolean  --> "boolean"
// BitInt   --> "number"
// String   --> "bigint"
// Symbol   --> "string"
// Function --> "function"
// Lainya   --> "object"

let dataNull = null;
let dataBoolean = true;
let dataBitInt = 100;
let dataString = "String";
let dataSymbol = "string";
let dataFunction = "function";

console.log(`Type Data: ${typeof(dataNull)}`);
