var X = parseInt(lines.shift()); // distância percorrida em km
var Y = parseFloat(lines.shift()); // combustivel gasto

let consumoMedio = (X / Y).toFixed(3);
console.log(consumoMedio + " km/l");