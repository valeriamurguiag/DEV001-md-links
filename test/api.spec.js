const path = require('path');
const pathFunctions = require('../api')

// Test for existsPath function
describe('existsPath', () => {

  const pathTrue = './exampleFiles/exampleFile.md';
  const pathFalse = './thisPath/doesNotExist';

  it('should be a function', () => {
    expect(typeof pathFunctions.existsPath).toBe('function');
  });

  it('should return true if path exists', () => {
    expect(pathFunctions.existsPath(pathTrue)).toBe(true);
  });

  it('should return false if path does not exists', () => {
    expect(pathFunctions.existsPath(pathFalse)).toBe(false);
  });
});


// Test for checkPath function
describe('checkPath', () => {

  const absolutePath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md';
  const pathTrue = './exampleFiles/exampleFile.md';

  it('should be a function', () => {
    expect(typeof pathFunctions.checkPath).toBe('function');
  });

  it('should return true if path is absolute', () => {
    expect(pathFunctions.checkPath(absolutePath)).toBe(true);
  });

  it('should return false if path is not absolute', () => {
    expect(pathFunctions.checkPath(pathTrue)).toBe(false);
  });
});


// Test for turnAbsolute function
describe('turnAbsolute', () => {

  const pathTrue = './exampleFiles/exampleFile.md';
  const absolutePath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md';

  it('should be a function', () => {
    expect(typeof pathFunctions.turnAbsolute).toBe('function');
  });

  it('should return an absolute path', () => {
    expect(pathFunctions.turnAbsolute(pathTrue)).toBe(absolutePath);
  });
});


// Test for isFileMarkdown function
describe('isFileMarkdown', () => {

  const absolutePath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md';
  const absolutePath2 = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\example.js';

  it('should be a function', () => {
    expect(typeof pathFunctions.isFileMarkdown).toBe('function');
  });

  it('should return true for .md extension file', () => {
    expect(pathFunctions.isFileMarkdown(absolutePath)).toBe(true);
  });

  it('should return false for non .md extension file', () => {
    expect(pathFunctions.isFileMarkdown(absolutePath2)).toBe(false);
  });
});


// Test for isDirectory function
describe('isDirectory', () => {

  const directoryPath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles';
  const pathTrue = './exampleFiles/exampleFile.md';

  it('should be a function', () => {
    expect(typeof pathFunctions.isDirectory).toBe('function');
  });

  it('should return true for directory path', () => {
    expect(pathFunctions.isDirectory(directoryPath)).toBe(true);
  });

  it('should return false for non directory path', () => {
    expect(pathFunctions.isDirectory(pathTrue)).toBe(false);
  });
});


// Test for readDir function
describe('readDir', () => {

  const directoryPath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles';
  const directoryContent =  [ 'example.js', 'exampleFile.md', 'exampleFile2.md', 'exampleFiles2' ];

  it('should be a function', () => {
    expect(typeof pathFunctions.readDir).toBe('function');
  });

  it('should return files in the directory', () => {
    expect(pathFunctions.readDir(directoryPath)).toEqual(directoryContent);
  });
});

// Test for getFile function
describe('getFile', () => {

  const absolutePath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md';
  const absolutePathContent = '[Markdown](https://es.wikipedia.org/wiki/Markdown), [Nodejs](https://nodejs.org/en/)' 

  it('should be a function', () => {
    expect(typeof pathFunctions.getFile).toBe('function');
  });

  it('should return file content', () => {
    expect(pathFunctions.getFile(absolutePath)).toBe(absolutePathContent);
  });
});


// Test for getMdFiles
describe('getMdFiles', () => {

  const absolutePath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md';
  const mdFilesArr2 = [
    'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md'
  ]
  const directoryPath = 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles';
  const mdFilesArr = [
    'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md',
    'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile2.md',
    'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFiles2\\exampleFile3.md'
  ]

  it('should be a function', () => {
    expect(typeof pathFunctions.getMdFiles).toBe('function');
  });

  it('should return an array containing the found md file', () => {
    expect(pathFunctions.getMdFiles(absolutePath)).toEqual(mdFilesArr2);
  });

  it('should return an array containing all found md files', () => {
    expect(pathFunctions.getMdFiles(directoryPath)).toEqual(mdFilesArr);
  });
});


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
    expect(typeof pathFunctions.getLinks).toBe('function');
  }); 

  it('should return an array containing objects with links information', () => {
    expect(pathFunctions.getLinks(directoryPath)).toEqual(linksArr);
  });
});