#!/usr/bin/env node
// Made our js file executable by the locally installed node program

const mdLinks = require('./index');
const chalk = require('chalk');
const { optStatsValidate, optStats, optValidate } = require('./src/optionsFunc');

const path = process.argv[2]
const argv = process.argv
const red = chalk.red;
const green = chalk.green;
const blue = chalk.blue;
const welcome = chalk.bgBlue;
const yellow = chalk.yellow;

const cli = (path, argv) => {
    // Grab provided arguments
    const [,, ...args] = process.argv;
    const validate = argv.includes("--validate");
    const stats = argv.includes("--stats");

    if(path == undefined){
        console.log(welcome('\n---------------------Welcome to MD-links---------------------' ))
        console.log('\nInstructions:')
        console.log(blue('1. Submit a valid path right after "md-links".'))
        console.log(blue('2. To see links route, url, status message, status number and text, write "--validate" right after your path.'))
        console.log(blue('3. To see total links number and unique links number, write "--stats" right after your path.'))
        console.log(blue('4. To additionally see broken links number, add "--stats --validate" right after your path.'))
    } 
    // else if (argv !== validate && argv !== stats) {
    //     console.log(red('Please try submitting a valid option such as "--validate", "--stats" or "--stats --validate" after your path.'))
    // }

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
                results.forEach(elem => {
                    console.log(blue(`${elem.file} `) + `${ elem.href} ` + blue(`${elem.message} `)  + `${elem.status} ` + `${elem.text}`) 
                })
            })
            .catch((error) => { 
                console.log(error) 
            })
            return
    }
}

cli(path, argv)

// mdLinks('C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles')
