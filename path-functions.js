const path = require('path');
const fs = require('fs');


// Check if path exists
const existsPath = (inputPath) => { 
    return (fs.existsSync(inputPath)); 
}

// Check if inputPath is relative or absolute
const checkPath = (inputPath) => {
    return (path.isAbsolute(inputPath));
}

// Turn inputPath into absolute path
const turnAbsolute = (inputPath) => {
    return (path.resolve(inputPath));
}

// Check inputPath extension
const isFileMarkdown = (inputPath) => {
    return (path.extname(inputPath) == '.md');
}

// Check if inputPath is a directory
const isDirectory = (inputPath) => {
    return (fs.statSync(inputPath).isDirectory());
}

// Show directory files
const readDir = (inputPath) => {
    return (fs.readdirSync(inputPath));
}

// Read file
const getFile = (pathFile) => {
    return (fs.readFileSync(pathFile,{ encoding: "utf-8"}));
}

// getFile('./mdFiles/exampleFile.md')
//     .then((result) => console.log(result))
//     .catch(error => console.log(error));


module.exports = {
    existsPath,
    checkPath,
    turnAbsolute,
    isFileMarkdown,
    getFile,
    isDirectory,
    readDir
}


