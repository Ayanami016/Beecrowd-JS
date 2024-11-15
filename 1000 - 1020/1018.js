var N = parseInt(lines.shift());

// 100
let Cem = (N - (N % 100)) / 100;
let Troco = N - (Cem  * 100);
// 50
let Cinquenta = (Troco - (Troco % 50)) / 50;
Troco = Troco - (Cinquenta * 50);
// 20
let Vinte = (Troco - (Troco % 20)) / 20;
Troco = Troco - (Vinte * 20);
// 10
let Dez = (Troco - (Troco % 10)) / 10;
Troco = Troco - (Dez * 10);
// 5
let Cinco = (Troco - (Troco % 5)) / 5;
Troco = Troco - (Cinco * 5);
// 2
let Dois = (Troco - (Troco % 2)) / 2;
Troco = Troco - (Dois * 2);
// 1
let Um = (Troco - (Troco % 1)) / 1;
Troco = Troco - (Um * 1);

console.log(N +
    "\n" + Cem + " nota(s) de R$ 100,00" +
    "\n" + Cinquenta + " nota(s) de R$ 50,00" +
    "\n" + Vinte + " nota(s) de R$ 20,00" +
    "\n" + Dez + " nota(s) de R$ 10,00" +
    "\n" + Cinco + " nota(s) de R$ 5,00" +
    "\n" + Dois + " nota(s) de R$ 2,00" +
    "\n" + Um + " nota(s) de R$ 1,00"
);