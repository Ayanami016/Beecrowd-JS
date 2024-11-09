var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

let MaiorAB = (A +  B + Math.abs(A - B)) / 2;
let Maior = (MaiorAB +  C + Math.abs(MaiorAB - C)) / 2;

console.log(Maior + " eh o maior");