//switch adalah percabangan yang sama dengan if, namun lebih sederhana cara pembuatanya
//kondisi di switch statement hanya untuk perbandingan ==
var nilai = "B";
switch (nilai) {
  case "A": {
    console.log("Anda lulus dengan Sangat Baik");
    break;
  }
  case "B": {
    console.log("Anda lulus dengan baik");
    break;
  }
  case "C": {
    console.log("Anda lulus");
    break;
  }
  case "D": {
    console.log("Anda tidak lulus");
    break;
  }
  default: {
    console.log("Mungkin anda salah jurusan");
  }
}
// ini kalau menggunakan IF ELSE, Hasil sama tapi lebih ringkas menggunakan SWITCH CASE
if (nilai === "A") {
  console.log("Anda lulus dengan Baik");
} else if (nilai === "B" || nilai === "C") {
  console.log("Anda Lulus");
} else if (nilai === "D") {
  console.log("Anda tidak lulus");
} else {
  console.log("Mungkin anda salah jurusan");
}
