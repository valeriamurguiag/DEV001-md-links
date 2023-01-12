const path = require('path');
const fs = require('fs');
const md = require('markdown-it');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;


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

// Getting .md files
const getMdFiles = (inputPath) => {
    let mdFilesArr = [];
    // Check if inputPath is a file 
    if (isDirectory(inputPath) == false && isFileMarkdown(inputPath)){
        // Turn path into absolute
        let absolutePath = turnAbsolute(inputPath);
        // Add path to the mdFilesArr
        mdFilesArr.push(absolutePath);
    } else if (isDirectory(inputPath)){
        // If so, read directory
        readDir(inputPath).forEach((file) => {
            // Join paths for each file
            let joinedPaths = path.join(inputPath, file);
            // Turn paths into absolute 
            let absolutePaths = turnAbsolute(joinedPaths);
            // Add paths to the mdFilesArr
            mdFilesArr = [...mdFilesArr, ...getMdFiles(absolutePaths)]
        });
    } 
    return mdFilesArr;
}

// Getting links from .md files
const getLinks = (inputPath) => {
    let linksArr = [];
    getMdFiles(inputPath).forEach((file) => {
        // The '/' characters define the beginning and the end of the regex.
        // The ^ character state that the expression to match must begin at the start of the input (but is altered by the 'm' modifier, see below).
        // The 'gm' at the end are modifiers. The 'g' modifier is used to perform a global match (find all matches rather than stopping after the first match). 
        // The 'm' modifier is used to perform multiline matching. It takes the beginning and end characters (^ and $) as working when taken over multiple lines. It matches the beginning or end of each line.
        const urlLinks = /\[([^\[]+)\](\(.*\))/gm;
        // Get [linkReferenceText] and (links) from links within every file
        let linksTextArr = getFile(file).match(urlLinks); 
        
        if (linksTextArr != null ) {
            // Turn .md file into HTML text
            let result = md().render(getFile(file));
            // Recreate DOM with JSDOm
            let dom = new JSDOM(result);
            // Render file content and select all <a> tags.
            linksTextArr = dom.window.document.querySelectorAll('a');
            
            linksTextArr.forEach((linksText) => {
                // Return URL link only
                const links = linksText.href
                // Return text only from 0th character and move up to 100th
                const text = linksText.textContent.substring(0, 100);
                // Push href, text and file to linksArr
                linksArr.push({
                    href: links,
                    text: text,
                    file: file,
                });
            });
        }
    });
    return linksArr;
}

console.log(getLinks('C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles'))

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


