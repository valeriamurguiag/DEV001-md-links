const optionsFunc = require('../src/optionsFunc')
jest.mock('node-fetch');
const fetch = require('node-fetch');
const { Response } = jest.requireActual('node-fetch');

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
      expect(typeof optionsFunc.getLinks).toBe('function');
    }); 
  
    it('should return an array containing objects with links information', () => {
      expect(optionsFunc.getLinks(directoryPath)).toEqual(linksArr);
    });
  });


  // Test for getStatus
describe('getStatus', () => {
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
    expect(typeof optionsFunc.getStatus).toBe('function');
  }); 

  // it('should return an array of objects including links AND status', () => {
  //   fetch.mockReturnValue(Promise.resolve(new Response({status: 200, message: 'OK'})));
  //   const response = optionsFunc.getStatus('[Markdown](https://es.wikipedia.org/wiki/Markdown)', 'exampleFiles/exampleFile.md');
  //   expect(response).resolves.toEqual([{
  //       href: 'https://es.wikipedia.org/wiki/Markdown',
  //       text: 'Markdown',
  //       file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md',
  //       status: 200,
  //       message: 'OK'
  //   }])
  // });
});