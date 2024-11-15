// HH:MM:SS
var N = parseInt(lines.shift());

let Hora = Math.floor(N/3600);
N %= 3600;
let Minuto = Math.floor(N/60);
N %= 60;

console.log(`${Hora}:${Minuto}:${N}`);