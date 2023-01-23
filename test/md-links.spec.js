const { default: expect } = require('expect');
const { describe } = require('yargs');
const { mdLinks,
        isFile,
        isAbsolute,
        resolverRuta,
        readingFiles
         } = require('../index.js');




 /* describe('mdLinks', () => {

  it('Deberia devolver una promesa', () => {
    expect(mdLinks()).toBe(typeof Promise);
  });  */
it('Deberia rechazar cuando el path no existe', () => {
  mdLinks('/mayito/documento/noexiste.md').catch((error) => {
    expect(error).toBe('la ruta no existe')
  })
});
//});   

describe('Saber si es un archivo')
it('isFile debería ser una función', () => {
  expect(typeof isFile).toBe('function');
});
/*  it('isFile debería dar true si es un archivo', () => {
  expect(isFile('C:\Users\chica\OneDrive\Documentos\Md-links\DEV001-md-links')).toBe(true);
});  */

describe('Saber si es absoluta' )
  it ('isAbsolute es una funcion', ()=>{
    expect( typeof isAbsolute).toBe('function');
})
describe('Deberia convertir a absoluta')
/it ('resolverRuta es una funcion', ()=>{
  expect(typeof resolverRuta ).toBe('function');
}) 
 it('debería convertir a ruta absoluta', () => {
  expect(resolverRuta('.\holo.txt')).toBe('C:UserschicaOneDriveDocumentosMd-linksDEV001-md-linksholo.txt');
}); 
describe('Saber si lee archivos')
it('readingFiles es una funcion', ()=>{
  expect(typeof readingFiles).toBe('function');
})

