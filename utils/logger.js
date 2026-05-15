const chalk = require('chalk');

const logger = {
    info: (msg) => console.log(`neu-builder: ${chalk.bgGreen.black('INFO')} ${msg}`),
    success: (msg) => console.log(`neu-builder: ${chalk.bgGreen.black('INFO')} ${msg}`),
    warn: (msg) => console.warn(`neu-builder: ${chalk.bgYellow.black('WARN')} ${msg}`),
    error: (msg) => console.error(`neu-builder: ${chalk.bgRed.black('ERRR')} ${msg}`)
};

module.exports = logger;