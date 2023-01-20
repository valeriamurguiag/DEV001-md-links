const mdLinks = require('../index')
const optionsFunc = require('../src/optionsFunc')

// Test for mdLinks
describe('mdLinks', () => {
 
    const directoryPath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles';
    const emptyDirectoryPath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFiles2';
    const linksArr = [
      {
        href: 'https://es.wikipedia.org/wiki/Markdown',
        text: 'Markdown',
        file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile.md'
      },
      {
        href: 'https://nodejs.org/en/',
        text: 'Nodejs',
        file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile.md'
      },
      {
        href: 'https://doesnotexist.linksarr2/',
        text: 'Does not exist',
        file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile.md'
      },
      {
        href: 'https://postimg.cc/py9FKLgr',
        text: 'Imagen final de proyecto',
        file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile2.md'
      }
    ];

    const getStatusExample = [
        {
          href: 'https://es.wikipedia.org/wiki/Markdown',
          text: 'Markdown',
          file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile.md',
          status: 200,
          message: 'OK'
        },
        {
          href: 'https://nodejs.org/en/',
          text: 'Nodejs',
          file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile.md',
          status: 200,
          message: 'OK'
        },
        {
          href: 'https://doesnotexist.linksarr2/',
          text: 'Does not exist',
          file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile.md',
          status: 'FAIL',
          message: 'NOT FOUND'
        },
        {
          href: 'https://postimg.cc/py9FKLgr',
          text: 'Imagen final de proyecto',
          file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile2.md',
          status: 200,
          message: 'OK'
        }
      ]
  
  
    it('should be a function', () => {
      expect(typeof mdLinks.mdLinks).toBe('function');
    }); 
  
    it('should return an array containing links objects (href, text, file)', () => {
      return mdLinks.mdLinks(directoryPath, { validate: false}).then((res) => {
        expect(res).toEqual(linksArr)
      })
    });

    it('should return an array containing links objects AND status', () => {
        return mdLinks.mdLinks(directoryPath, { validate: true}).then((res) => {
          expect(res).toEqual(getStatusExample)
        })
    });
});
  