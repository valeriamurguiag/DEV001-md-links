const optionsFunc = require('../src/optionsFunc')
jest.mock('node-fetch');
const fetch = require('node-fetch');
const { Response } = jest.requireActual('node-fetch');

// Test for getLinks
describe('getLinks', () => {

    const directoryPath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles';  
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
      file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile.md'
    },
    {
      href: 'https://nodejs.org/en/',
      text: 'Nodejs',
      file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile.md'
    },
    {
      href: 'https://postimg.cc/py9FKLgr',
      text: 'Imagen final de proyecto',
      file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile2.md'
    }
  ];


  it('should be a function', () => {
    expect(typeof optionsFunc.getStatus).toBe('function');
  }); 

  it('should return an array of objects including links AND status', () => {
    fetch.mockReturnValue(Promise.resolve(new Response({status: 200, message: 'OK'})));
    const response = optionsFunc.getStatus(linksArr);
    expect(response).resolves.toEqual([
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
        href: 'https://postimg.cc/py9FKLgr',
        text: 'Imagen final de proyecto',
        file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles\\exampleFile2.md',
        status: 200,
        message: 'OK'
      }
    ])
  });
});

// Test for optStatsValidate
describe('optStatsValidate', () => {
 
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

  const infoObj = { total: 4, unique: 4, broken: 0 }

  it('should be a function', () => {
    expect(typeof optionsFunc.optStatsValidate).toBe('function');
  }); 

  it('should return an object containing total, unique and broken links', () => {
    expect(optionsFunc.optStatsValidate(linksArr)).toEqual(infoObj);
  });
});

// Test for optStats
describe('optStats', () => {
 
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

  const infoObj = { total: 4, unique: 4 }

  it('should be a function', () => {
    expect(typeof optionsFunc.optStats).toBe('function');
  }); 

  it('should return an object containing total and unique links', () => {
    expect(optionsFunc.optStats(linksArr)).toEqual(infoObj);
  });
});

// Test for optValidate
describe('optValidate', () => {

  const promisesArrExample = [
    {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md',
      status: 200,
      message: 'OK'
    },
    {
      href: 'https://nodejs.org/en/',
      text: 'Nodejs',
      file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md',
      status: 200,
      message: 'OK'
    },
    {
      href: 'https://doesnotexist.linksarr2/',
      text: 'Does not exist',
      file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md',
      status: 'FAIL',
      message: 'NOT FOUND'
    },
    {
      href: 'https://postimg.cc/py9FKLgr',
      text: 'Imagen final de proyecto',
      file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile2.md',
      status: 200,
      message: 'OK'
    }
  ]
 
  const infoArr = [
    'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md https://es.wikipedia.org/wiki/Markdown OK 200 Markdown',
    'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md https://nodejs.org/en/ OK 200 Nodejs',
    'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md https://doesnotexist.linksarr2/ NOT FOUND FAIL Does not exist',
    'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile2.md https://postimg.cc/py9FKLgr OK 200 Imagen final de proyecto'
  ]

  it('should be a function', () => {
    expect(typeof optionsFunc.optValidate).toBe('function');
  }); 

  it('should return an object containing total and unique links', () => {
    expect(optionsFunc.optValidate(promisesArrExample)).toEqual(infoArr);
  });
});