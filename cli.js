#!/usr/bin/env node
// Made our js file executable by the locally installed node program

const { mdLinks } = require('./index')
const chalk = require('chalk');

// Grab provided arguments
const [,, ...args] = process.argv;

const title = chalk.bold.bgBlue
const message = chalk.blue;
const error = chalk.bold.bgRed;
const result = chalk.bold.bgGreen

const greeting = () => {
    console.log(message('----------' + title(`Welcome to MD Links ${args}`) + message('----------')))
}

greeting()