// Nullist value adalah null dan undefined
// Nullist coalescing operator (??) adalah operator mirip dengan ternary operator
// yang membedakan adalah pada kondisi, jika bernilai null atau undefined,
// baru value default nya diambil
let parameter;

let data = parameter;
if (data === undefined || data === null) {
  data = "Nilai default"; // dataya kita rubah
}
//lebih sederhana daripada menggunakan if statement
let data = parameter ?? "Nilai Default";
alert(data);
