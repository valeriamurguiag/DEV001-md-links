const chalk = require('chalk');

const title = chalk.bold.bgBlue
const message = chalk.blue;
const error = chalk.bold.bgRed;
const result = chalk.bold.bgGreen

const greeting = () => {
    console.log(message('----------' + title('Welcome to MD Links') + message('----------')))
}

greeting()