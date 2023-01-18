
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');
// ver si es archivo
const isFile = (route)=>fs.statSync(route).isFile()
// ver si la ruta es absoluta
const isAbsolute = (route) => path.isAbsolute(route)
// si no es abosoluta ,convertir en ruta absoluta.
const resolverRuta = (route)=>path.resolve(route)
const route = './holo.txt';
/* const  mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // identificar si la ruta existe
    /* if (fs.existsSync(path)) {
      resolve('esta ruta existe');

    } else {
      // si no existe la ruta rechazar la promesa
      reject('la ruta no existe')
    }

  }); */

  
  //ver si el archivo es md
  // crear una funcion para  leer el archivo
  // Ver si el archivo tiene links
  // si es un archivo md,
  // ver si los links son validos o no


/*  if (isFile(route)){
  console.log('esto es un archivo')
}
else{
  console.log('Esto no es un archivo')
} */

 if (isAbsolute(route)){
  console.log('esta ruta es abolsuta')

} else {
  resolverRuta()
}
 
/* module.exports = {
  mdLinks

}; */
//console.log(resolverRuta('./archivosDePruebas'));








