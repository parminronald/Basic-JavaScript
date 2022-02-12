# Looping

Looping merupakan pengulangan. Alasan dari penggunaan looping dapat diilustrasikan dengan kode program di bawah.

```js
// Cetak "Hello" pada terminal sebanyak 128 kali
console.log("Hello"); // Line 1
console.log("Hello"); // Line 2
console.log("Hello"); // Line 3
.
.
.
console.log("Hello"); // Line 128
```

> Kode program di atas rawan untuk error dengan alasan sebagai berikut:

- Kita harus benar-benar memperhatikan bahwa ada tepat 128 `console.log("Hello")`.
- Apabila requirement berubah menjadi 256 kali, maka kita harus melakukan _copy-paste_ dengan teliti hingga benar-benar ada 256 baris `console.log("Hello")`.

Maka dari itu, bahasa pemrograman pada umumnya menyediakan fitur looping. Pada JavaScript terdapat tiga jenis looping, yaitu `for`, `while` dan `do...while`.

> **DRY (Don't Repeat Yourself)**. Pekerjaan manual yang sama dan dilakukan berkali-kali akan memperbesar kemungkinan terjadinya human error.

## For

Syntax `for` memiliki empat bagian:

1. Inisialisasi
2. Kondisional
3. Increment/Decrement
4. Kode program yang akan dieksekusi

> ---
>
> **Syntax**
>
> ```
> for (1. Inisialisasi; 2. Kondisional; 3. Increment/decrement){
>    4. Kode program yang dieksekusi
> }
> ```
>
> **Pseudocode**
>
> ```
> FOR i FROM 0 TO 10 INCREMENT BY 1
>  DISPLAY 'Hello'
> END FOR
> ```
>
> **Contoh**
>
> ```js
> for (var i = 0; i < 10; i++) {
>   console.log("Hello");
> }
> ```
>
> ---

Apabila diterjemahkan ke Bahasa Indonesia, `for` adalah **LAKUKAN X SEBANYAK Y KALI**. Dengan pengertian tersebut, maka `for` tepat untuk digunakan pada pengulangan yang kita tahu persis beberapa kali akan dilakukan.

## While

Syntax `while` memiliki dua bagian:

1. Kondisional
2. Kode program yang dieksekusi

> ---
>
> **Syntax**
>
> ```
> while (1. Inisialisasi){
>    2. Kode program yang dieksekusi
> }
> ```
>
> **Pseudocode**
>
> ```
> STORE i WITH 0
> WHILE i LESS THAN 10
>  DISPLAY 'Hello'
>  SET i WITH i PLUS 1
> END WHILE
> ```
>
> **Contoh**
>
> ```js
> var i = 0;
> while (i < 10) {
>   console.log("Hello");
>   i++;
> }
> ```
>
> ---

Apabila diterjemahkan ke Bahasa Indonesia , `while` adalah **SELAMA TRUE LAKUKAN X**. Dengan pengertian tersebut, maka `while` tepat untuk digunakan pada pengulangan dimana kita hanya tahu kondisi berhentinya saja, tanpa mengetahui berapa banyak pengulangan akan dilakukan.

## do..while

Syntax `do...while` memiliki dua bagian:

1. Kondisional
2. Kode program yang dieksekusi

> ---
>
> **Syntax**
>
> ```
> do {
>    2. Kode program yang dieksekusi
> } while (1. Inisialisasi)
> ```
>
> **Pseudocode**
>
> ```
> STORE i WITH 0
> DO
>  DISPLAY 'Hello'
>  SET i WITH i PLUS 1
> WHILE i LESS THAN 10
> ```
>
> **Contoh**
>
> ```js
> var i = 0;
> do {
>   console.log("Hello");
>   i++;
> } while (i < 10);
> ```
>
> ---

Apabila diterjemahkan ke Bahasa Indonesia , `do...while` adalah **LAKUKAN X SELAMA TRUE**. Dengan pengertian tersebut, maka `do...while` tepat untuk digunakan pada pengulangan dimana kita hanya tahu kondisi berhentinya saja, tanpa mengetahui berapa banyak pengulangan akan dilakukan.

## while vs do...while

Perbedaan antara `while` dengan `do...while` adalah:

- Pada `while` pengecekan kondisi akan dilakukan terlebih dahulu.
- pada `do...while` pengecekan kondisi akan dilakukan belakangan.

## break

`break` merupakan statement yang dapat digunakan untuk mengakhiri looping. Sebagai contoh, perhatikan kode program di bawah:

```js
for (var i = 0; i < 10; i++) {
  console.log("Hello");
  break;
}
```

Hasil yang didapatkan dari mengeksekusi kode program tersebut hanyalah sebuah text `'Hello'`. Setelah `'Hello'` ditampilkan, komputer akan mengksekusi `break`, sehingga proses looping berhenti.

## Infinite Loop

```js
// Salah kondisi atau variable yang di increment
var j = 0;
for (var i = 0; i < 10; j++) {
  console.log(i);
}
```
