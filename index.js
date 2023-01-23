
const fs = require('fs');
const path = require('path');
const esRuta = (route) => fs.existsSync(route)
// ver si es archivo
const isFile = (route) => fs.statSync(route).isFile()
// ver si la ruta es absoluta
const isAbsolute = (route) => path.isAbsolute(route)
// si no es abosoluta ,convertir en ruta absoluta.
const resolverRuta = (route) => path.resolve(route)
// funcion que lea archivos
const readingFiles = (route) => new Promise((resolve, reject) => {
  fs.readFile(route, 'utf8', function (error, data) {
    if (error) {
      reject('error')
    } else {
      resolve(data)
    }
  })
});
const route = './holo.txt';

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // identificar si la ruta existe
    if (esRuta(path)) {
      const absolutePath = isAbsolute(path) ? route : resolverRuta(route); // si es relativa convertirla
      if (isFile(absolutePath)) {
        console.log('esto es un archivo')
      }
      else {
        reject('Esto no es un archivo')
      }
      readingFiles('./holo.txt')
        .then(res => console.log(res)) 
    }
  });
   /*  else {
     // si no existe la ruta rechazar la promesa
     reject('la ruta no existe')
   } 
 */
}



console.log(mdLinks('./holo.txt'));

module.exports = {
  mdLinks,
  isFile,
  isAbsolute,
  resolverRuta,
  readingFiles
};   