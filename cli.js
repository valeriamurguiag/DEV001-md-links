#!/usr/bin/env node
// Made our js file executable by the locally installed node program

const mdLinks = require('./index');
const chalk = require('chalk');
const { optStatsValidate, optStats, optValidate } = require('./src/optionsFunc');

// const [,, ...args] = process.argv;

// const message = chalk.blue;
// const greeting = () => {
//     console.log(message('----------' + `Welcome to MD Links ${args}` + message('----------')))
// }

// greeting()

const path = process.argv[2]
const argv = process.argv

const cli = (path, argv) => {
    // Grab provided arguments
    const [,, ...args] = process.argv;
    const validate = argv.includes("--validate");
    const stats = argv.includes("--stats");

    if(path == undefined){
        console.log('Invalid path. Please try another one')
    } 

    if (argv === undefined && argv !== validate && argv !== stats) {
        console.log('Invalid option. Please try to use --validate, --stats or --stats --validate')
    }

    if(stats && validate){
        mdLinks.mdLinks(path, { validate: true })
        .then((results) => {
            const statsValidate = optStatsValidate(results)
            console.log(`Total: ${statsValidate.total} \nUnique: ${statsValidate.unique} \nBroken: ${statsValidate.broken}`)
        })
        .catch((error) => {
            console.log(error)
        })
        return
    }
 
    if (stats) {
        mdLinks.mdLinks(path, { validate: false })
            .then((results) => {
                const onlyStats = optStats(results)
                console.log(`Total: ${onlyStats.total}\nUnique: ${onlyStats.unique}`)
            })
            .catch((error) => { 
                console.log(error) 
            })
            return
    }

    if (validate) {
        mdLinks.mdLinks(path, { validate: true })
            .then((results) => {
                const onlyValidate = optValidate(results)
                console.log(`${onlyValidate.file} ${onlyValidate.href} ${onlyValidate.message} ${onlyValidate.status} ${onlyValidate.text}`)
                
            })
            .catch((error) => { 
                console.log(error) 
            })
            return
    }
}

cli(path, argv)

// mdLinks('C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles')
