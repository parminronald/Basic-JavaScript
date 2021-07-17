//undefined adalah kata kunci di javaScript
//undefined adalah sebuat type data
// sebuah variable yang belum ditambahkan nilai, 
//maka artiya variable tersebuat merupakan type data undefined
//undefined itu berbeda dengan null di bahasa program yang lain
let name; //undefined karena belum ada jedisdataya
if (name===undefined){
    alert("UNDEFINED");
}else{
    alert("DEFINED");
}

const names=["Eko", "Kurniawan"]
if (names[2]===undefined){
    console.info("ARRAY UNDEFINED");
}else{
    console.info("ARRAY DEFINED");
}

const names={};//belum di definisikan

if (names.nama === undefined){
    console.info("OBJECT UNDEFINED");
}else{
    console.info("OBJECT DEFINED");
}