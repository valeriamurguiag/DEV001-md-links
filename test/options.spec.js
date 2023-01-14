const linksValid = require('../src/options')

// Test for getLinks
describe('getLinks', () => {

    const directoryPath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles';  
    const linksArr = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md'
      },
      {
        href: 'https://nodejs.org/en/',
        text: 'Nodejs',
        file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md'
      },
      {
        href: 'https://postimg.cc/py9FKLgr',
        text: 'Imagen final de proyecto',
        file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile2.md'
      }
    ];
  
    it('should be a function', () => {
      expect(typeof linksValid.getLinks).toBe('function');
    }); 
  
    it('should return an array containing objects with links information', () => {
      expect(linksValid.getLinks(directoryPath)).toEqual(linksArr);
    });
  });