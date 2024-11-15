var A = parseFloat(lines.shift()); // peso 2
var B = parseFloat(lines.shift()); // peso 3
var C = parseFloat(lines.shift()); // peso 5

let MEDIA = ((A * 2 + B * 3 + C * 5) / 10).toFixed(1);
console.log("MEDIA = " + MEDIA);