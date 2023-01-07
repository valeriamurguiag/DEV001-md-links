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
const getFile = (inputPath) => {
    return (fs.readFileSync(inputPath,{ encoding: "utf-8"}));
}

// Getting .md files within directory
const getMdFiles = (inputPath) => {
    let mdFilesArr = [];
    // Check if inputPath is a directory
    if (isDirectory(inputPath)){
        // If so, read directory
        readDir(inputPath).forEach((file) => {
            // Join paths for each file
            let joinedPaths = path.join(inputPath, file);
            // Turn paths into absolute 
            let absolutePaths = turnAbsolute(joinedPaths);
            // Add paths to the mdFilesArr
            mdFilesArr.push(absolutePaths);
        });
    } else if (isFileMarkdown(inputPath)){
        // Turn path into absolute
        let absolutePath = turnAbsolute(inputPath);
        // Add path to the mdFilesArr
        mdFilesArr.push(absolutePath);
    }
    return mdFilesArr;
}

module.exports = {
    existsPath,
    checkPath,
    turnAbsolute,
    isFileMarkdown,
    isDirectory,
    readDir,
    getFile,
    getMdFiles
}


