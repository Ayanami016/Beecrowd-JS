// Valores do problema
const valores = lines.shift().split(" ");

var A = parseInt(valores[0]);
var B = parseInt(valores[1]);
var C = parseInt(valores[2]);

let MaiorAB = (A +  B + Math.abs(A - B)) / 2;
let Maior = (MaiorAB +  C + Math.abs(MaiorAB - C)) / 2;

console.log(Maior + " eh o maior");