#!/usr/bin/env node
// Made our js file executable by the locally installed node program

const { mdLinks } = require('./index')
const chalk = require('chalk');

// Grab provided arguments
const [,, ...args] = process.argv;
const validate = argv.includes("--validate");
const stats = argv.includes("--stats");

const cli = (path, argv)

// console.log(args[0]);
// mdLinks(args[0], options)
// .then(response => console.log(response))
// .catch((error) => console.log(error));

// const message = chalk.blue;
// mdLinks('C:\\Users\\balry\\OneDrive\\Documentos\\Laboratoria\\Proyecto4-MDLinks\\DEV001-md-links\\exampleFiles')

// const greeting = () => {
//     console.log(message('----------' + title(`Welcome to MD Links ${args}`) + message('----------')))
// }

// greeting()