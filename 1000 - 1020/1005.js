var n1 = parseFloat(lines.shift());
var n2 = parseFloat(lines.shift());

let MEDIA = ((n1 * 3.5 + n2 * 7.5) / 11).toFixed(5);
console.log("MEDIA = " + MEDIA);