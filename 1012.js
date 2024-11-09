// Todos os valores do problema
var valores = lines.shift().split(" ");
const pi = 3.14159;

var A = parseFloat(valores.shift(" "));
var B = parseFloat(valores.shift(" "));
var C = parseFloat(valores.shift(" "));

// Áreas
let TrianguloRetangulo = ((A * C) / 2).toFixed(3);
let Circulo = (pi * (C**2)).toFixed(3);
let Trapezio = (((A + B) * C) / 2).toFixed(3);
let Quadrado = (B**2).toFixed(3);
let Retangulo = (A * B).toFixed(3);

console.log("TRIANGULO: " + TrianguloRetangulo +
    "\nCIRCULO: " + Circulo +
    "\nTRAPEZIO: " + Trapezio +
    "\nQUADRADO: " + Quadrado +
    "\nRETANGULO: " + Retangulo
);