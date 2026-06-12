#!/usr/bin/env node

const logger = require("./utils/logger");
const resolveConfig = require("./lib/configresolver");
const builder = require("./lib/builder");

const args = process.argv.slice(2);
const separatorIndex = args.indexOf('--');
const passedFlags = separatorIndex !== -1 ? args.slice(0, separatorIndex) : args;
const neuBuildFlags = separatorIndex !== -1 ? args.slice(separatorIndex + 1) : [];
const target = passedFlags.find(arg => !arg.startsWith('-'));

logger.info("Neutralinojs Builder initialized.");

const config = resolveConfig();
config.neuBuildFlags = neuBuildFlags;

if (!target) {
    logger.warn("No target specified. Usage: neu-builder <target> -- [neu build flags]");
    process.exit(1);
} else {
    config.target = target;
    logger.info("Configuration loaded.");
    logger.info(`Target platform detected: ${target}`);
    if (neuBuildFlags.length > 0) {
        logger.info(`Forwarding core build flags: ${neuBuildFlags.join(' ')}`);
    }
    builder.build(config).catch(() => {
        process.exit(1);
    });
}