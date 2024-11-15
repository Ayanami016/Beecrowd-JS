const carro = 12;
var horas = parseInt(lines.shift());
var velocidade = parseInt(lines.shift());

let Litros = ((horas * velocidade) / carro).toFixed(3);
console.log(Litros);