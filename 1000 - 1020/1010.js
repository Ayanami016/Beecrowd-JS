var peca1 = lines.shift().split(" ");
var peca2 = lines.shift().split(" ");

// Peça 1
let cod1 = parseInt(peca1.shift());
let qtdd1 = parseInt(peca1.shift());
let preco1 = parseFloat(peca1.shift());

// Peça 2
let cod2 = parseInt(peca2.shift());
let qtdd2 = parseInt(peca2.shift());
let preco2 = parseFloat(peca2.shift());

// Total a pagar
let Total = parseFloat((qtdd1 * preco1) + (qtdd2 * preco2)).toFixed(2);
console.log("VALOR A PAGAR: R$ " + Total);