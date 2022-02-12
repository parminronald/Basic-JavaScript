/* Operator Logika
&&      operator dan
||      Atau
!       hasil kebalikan 
*/

const nilaiUjian = 70;
const nilaiAbsensi = 70;
const lulusUjian = nilaiUjian > 75;
const lulusAbsensi = nilaiAbsensi > 75;
const lulus = lulusUjian && lulusAbsensi;
console.log(lulus);
