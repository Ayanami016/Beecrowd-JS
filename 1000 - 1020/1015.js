var linha1 = lines.shift().split(" ");
var linha2 = lines.shift().split(" ");

// Linha 1
var x1 = parseFloat(linha1[0]);
var y1 = parseFloat(linha1[1]);

// Linha 2
var x2 = parseFloat(linha2[0]);
var y2 = parseFloat(linha2[1]);

// Cálculo
let Distancia = Math.sqrt(((x2 - x1)**2) + ((y2 - y1)**2)).toFixed(4);
console.log(Distancia);