/* fuction dalam function
    Tidak ada batasan dimana kita bisa membuat function
    Termasuk jika kita ingin membuat function dalam sebuat function
function yang dapat di dalam, kita sebut inner functionInffer function haya bisa diakses di tempat kita membuat function nya
 */
function outer() {
  function inner() {
    console.log("ini function inner");
  }
  inner();
}
outer();
