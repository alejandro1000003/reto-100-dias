// file system
const fs = require('node:fs');

console.log('Leyendo el primer archivo')
const text = fs.readFile('./fichero.txt', 'utf-8');
console.log(text)

console.log('Leyendo el segundo archivo')
const text2 = fs.readFile('./fichero2.txt', 'utf-8');
console.log(text2)
