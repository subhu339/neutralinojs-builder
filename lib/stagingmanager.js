const path = require("path");
const fs = require("fs");
const fileUtils = require("../utils/fileutils");
const logger = require("../utils/logger");

function prepare(config) {
    const stagingDir = path.join(
        process.cwd(),
        ".neu-builder-staging"
    );

    logger.info("Preparing staging directory...");
    fileUtils.removeDirectory(stagingDir);
    fileUtils.ensureDirectory(stagingDir);

    const distDir = path.join(process.cwd(), "dist");

    if (!fs.existsSync(distDir)) {
        logger.error("dist/ directory not found.");
        throw new Error("dist/ directory not found.");
    }

    fileUtils.copyDirectory(distDir, stagingDir);
    logger.info(`Staging ready at: ${stagingDir}`);

    return stagingDir;
}

function cleanup(stagingDir) {
    fileUtils.removeDirectory(stagingDir);
    logger.info("Staging directory cleaned up.");
}

module.exports = {
    prepare,
    cleanup
};