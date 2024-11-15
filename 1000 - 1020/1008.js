var num = parseInt(lines.shift());
var qttd_horas = parseInt(lines.shift());
var valor_porHora = parseFloat(lines.shift());

let SALARIO = (qttd_horas * valor_porHora).toFixed(2);
console.log("NUMBER = " + num +
    "\nSALARY = U$ " + SALARIO
);