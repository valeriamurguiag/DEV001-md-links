const path = require('path');
const pathFunctions = require('../path-functions')

// Test for existsPath function
describe('existsPath', () => {

  it('should be a function', () => {
    expect(typeof pathFunctions.existsPath).toBe('function');
  });

  it('should return true if path exists', () => {
    expect(pathFunctions.existsPath('./mdFiles/exampleFile.md')).toBe(true);
  });
});


// Test for checkPath function
describe('checkPath', () => {

  it('should be a function', () => {
    expect(typeof pathFunctions.checkPath).toBe('function');
  });

  it('should return true if path is absolute', () => {
    expect(pathFunctions.checkPath('C:/Users/balry/OneDrive/Documentos/Laboratoria/Proyecto 4 - MD Links/DEV001-md-links/mdFiles/exampleFile.md')).toBe(true);
  });
});


// Test for turnAbsolute function
describe('turnAbsolute', () => {

  it('should be a function', () => {
    expect(typeof pathFunctions.turnAbsolute).toBe('function');
  });

  // it('should return absolute path', () => {
  //   expect(pathFunctions.turnAbsolute('/mdFiles/exampleFile.md')).toBe('C:/Users/balry/OneDrive/Documentos/Laboratoria/Proyecto 4 - MD Links/DEV001-md-links/mdFiles/exampleFile.md');
  // });
});


// Test for isFileMarkdown function
describe('isFileMarkdown', () => {

  it('should be a function', () => {
    expect(typeof pathFunctions.isFileMarkdown).toBe('function');
  });

  // it('should return .md extension', () => {
  //   expect(pathFunctions.isFileMarkdown('C:/Users/balry/OneDrive/Documentos/Laboratoria/Proyecto 4 - MD Links/DEV001-md-links/mdFiles/exampleFile.md')).toBe('.md');
  // });
});


// Test for getFile function
describe('getFile', () => {

  it('should be a function', () => {
    expect(typeof pathFunctions.getFile).toBe('function');
  });

  // test('should read file', getFile => {
  //   function getFile(err, data) {
  //     if (err) {
  //         done(err);
  //         return;
  //     } try {
  //         expect(data).toBe('[![imagen-final.png](https://i.postimg.cc/2jG7RqGQ/imagen-final.png)](https://postimg.cc/py9FKLgr)');
  //         done();
  //     } catch {
  //         done(err);
  //     }
  //   }
  //   fetchData(getFile);
  // });
});

// Test for readDir function
describe('readDir', () => {

  it('should be a function', () => {
    expect(typeof pathFunctions.readDir).toBe('function');
  });

  // it('should return files in the directory', () => {
  //   expect(pathFunctions.readDir('C:/Users/balry/OneDrive/Documentos/Laboratoria/Proyecto 4 - MD Links/DEV001-md-links/mdFiles/')).toBe('[ \'example.js\', \'exampleFile.md\', \'exampleFile2.md\' ]');
  // });
});