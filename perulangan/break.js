// Break & Continue
// pada switch statement,kata break untuk menghentikan case pada switch
// sama denganpadaperulangan, break juga digunakan untuk menghentikan seluruh perulangan
// berbeda dengan continue, continue digunakan untuk menghentikan perulangan saat ini
// lalu melanjutkan ke perulangan selanjutya
let counter=1;
while(true){
    console.log(`Perulangan ke: ${counter}`);
    counter++;
    if (counter > 10){
        break;
    }
}