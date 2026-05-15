#!/usr/bin/env node
const logger = require('./utils/logger');

const args = process.argv.slice(2);
const target = args[0];

logger.info("Neutralinojs Builder initialized.");

if (!target) {
    logger.warn("No target specified. Usage: neu-builder <target>");
} else {
    logger.info(`Target detected: ${target}`);
}