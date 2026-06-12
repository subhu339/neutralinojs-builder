const logger = require("../utils/logger");
const precheck = require("./precheck");
const stagingManager = require("./stagingmanager");
const targetLoader = require("./targetloader");

async function build(config) {
    logger.info("Starting build pipeline...");

    precheck(config);
    logger.info("Environment pre-checks passed.");

    const stagingPath = stagingManager.prepare(config);
    logger.info("Staging folder prepared successfully.");

    const target = targetLoader.load(config.target);
    logger.info(`Target loaded: ${config.target}`);

    await target.build(config, stagingPath);
    logger.info("Packaging completed successfully!");

    stagingManager.cleanup(stagingPath);
}

module.exports = { build };