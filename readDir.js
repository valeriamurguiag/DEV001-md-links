// Crear función que lea e imprima el contenido de un directorio

const { readdirSync } = require('fs');
const path = require('path');

filenames = readdirSync(__dirname);

console.log("\Filenames with the .md extension:");
filenames.forEach(file => {
  if (path.extname(file) == ".md")
    console.log(file);
})