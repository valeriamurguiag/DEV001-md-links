const path = require('path');
const pathFunctions = require('../path-functions')

// Test for existsPath function
describe('existsPath', () => {

  const pathTrue = './mdFiles/exampleFile.md';

  it('should be a function', () => {
    expect(typeof pathFunctions.existsPath).toBe('function');
  });

  it('should return true if path exists', () => {
    expect(pathFunctions.existsPath(pathTrue)).toBe(true);
  });
});


// Test for checkPath function
describe('checkPath', () => {

  const absolutePath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\mdFiles\\exampleFile.md';

  it('should be a function', () => {
    expect(typeof pathFunctions.checkPath).toBe('function');
  });

  it('should return true if path is absolute', () => {
    expect(pathFunctions.checkPath(absolutePath)).toBe(true);
  });
});


// Test for turnAbsolute function
describe('turnAbsolute', () => {

  const pathTrue = './mdFiles/exampleFile.md';
  const absolutePath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\mdFiles\\exampleFile.md';

  it('should be a function', () => {
    expect(typeof pathFunctions.turnAbsolute).toBe('function');
  });

  it('should return an absolute path', () => {
    expect(pathFunctions.turnAbsolute(pathTrue)).toBe(absolutePath);
  });
});


// Test for isFileMarkdown function
describe('isFileMarkdown', () => {

  const absolutePath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\mdFiles\\exampleFile.md';

  it('should be a function', () => {
    expect(typeof pathFunctions.isFileMarkdown).toBe('function');
  });

  it('should return true for .md extension', () => {
    expect(pathFunctions.isFileMarkdown(absolutePath)).toBe(true);
  });
});

// Test for isDirectory function
describe('isDirectory', () => {

  const directoryPath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\mdFiles';

  it('should be a function', () => {
    expect(typeof pathFunctions.isDirectory).toBe('function');
  });

  it('should return true for directory path', () => {
    expect(pathFunctions.isDirectory(directoryPath)).toBe(true);
  });
});


// Test for readDir function
describe('readDir', () => {

  const directoryPath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\mdFiles';
  const directoryTrue =  [ 'example.js', 'exampleFile.md', 'exampleFile2.md' ];

  it('should be a function', () => {
    expect(typeof pathFunctions.readDir).toBe('function');
  });

  it('should return files in the directory', () => {
    expect(pathFunctions.readDir(directoryPath)).toEqual(directoryTrue);
  });
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