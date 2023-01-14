const md = require('markdown-it');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fetch = require('node-fetch');
const { getMdFiles, getFile } = require('./api')

// Getting links from .md filess
const getLinks = (inputPath) => {
    let promiseLinksArr = [];
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
                // Push href, text and file to promiseLinksArr
                promiseLinksArr.push({
                    href: links,
                    text: text,
                    file: file,
                });
            });
        }
    });
    return promiseLinksArr;
}

// const promiseLinksArrExample = [
//     {
//       href: 'https://es.wikipedia.org/wiki/Markdown',
//       text: 'Markdown',
//       file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md'
//     },
//     {
//       href: 'https://nodejs.org/en/',
//       text: 'Nodejs',
//       file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile.md'
//     },
//     {
//       href: 'https://postimg.cc/py9FKLgr',
//       text: 'Imagen final de proyecto',
//       file: 'C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto 4 - MD Links\\DEV001-md-links\\exampleFiles\\exampleFile2.md'
//     }
//   ];

// Validating links
const getStatus = (promiseLinksArr) => {
    // Create array that will contain promises
    let promisesArr = [];
    // Loop through each link
    promisesArr = promiseLinksArr.map((link) => fetch(link.href)
    // Check if their response status was succesful
    .then((response) => {
        if (response.ok){
            return {
                ...link,
                status: response.status,
                message: response.statusText,
            }
        } 
            return {
                ...link,
                status: response.status,
                message: response.statusText,
            }         
    })
    .catch(() => {
        return {
            ...link,
            status: 'FAIL',
            message: 'NOT FOUND'
        }
    })) 
    return Promise.all(promisesArr);
}

// console.log(validateLinks(promiseLinksArrExample))

module.exports = {
    getLinks,
    getStatus
}