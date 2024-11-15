var nome = lines.shift();
var salarioFixo = parseFloat(lines.shift());
var totalVendas = parseFloat(lines.shift());

let TOTAL = (salarioFixo + (totalVendas * 0.15)).toFixed(2);

console.log("TOTAL = R$ " + TOTAL);