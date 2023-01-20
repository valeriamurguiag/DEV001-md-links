#!/usr/bin/env node
// Made our js file executable by the locally installed node program

const { mdLinks } = require('./index');
const chalk = require('chalk');
const { optStatsValidate, optStats, optValidate } = require('./src/optionsFunc');

// const message = chalk.blue;
// const greeting = () => {
//     console.log(message('----------' + title(`Welcome to MD Links ${args}`) + message('----------')))
//     console.log('')
// }

// greeting()

const cli = (path, argv) => {
    // Grab provided arguments
    const [,, ...args] = process.argv;
    const validate = argv.includes("--validate");
    const stats = argv.includes("--stats");

    if(path == undefined){
        console.log('Invalid path. Please try a new path.')
    } 
    if(stats && validate){
        mdLinks(path)
    }

}

// mdLinks('C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles')
