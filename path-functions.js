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
const turnAbsolute = (inputPath) => console.log(path.resolve(inputPath));

// Check inputPath extension
const isFileMarkdown = (inputPath) => console.log(path.extname(inputPath))

// Read file
const getFile = (pathFile) => {
    return new Promise(function (resolve, reject){
        fs.readFile(pathFile, 'utf-8', (err, data) => {
            if (err){
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

// Show directory files
const readDir = (inputPath) => console.log(fs.readdirSync(inputPath));

// Getting inputPath information (to eventually know if its a file or directory)
const getPathStat = (inputPath) => fs.stat(inputPath);

// 



// Calling fuctions to check outputs
// existsPath('./mdFiles/exampleFile.md')

// checkPath('./mdFiles/exampleFile.md')

// turnAbsolute('./mdFiles/exampleFile.md')

// isFileMarkdown('./mdFiles/exampleFile.md')

// getFile('./mdFiles/exampleFile.md')
//     .then((result) => console.log(result))
//     .catch(error => console.log(error));

// readDir('./mdFiles');

module.exports = {
    existsPath,
    checkPath,
    turnAbsolute,
    isFileMarkdown,
    getFile,
    readDir
}


