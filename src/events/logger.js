'use strict';

/** @module src/events/logger  */

const events = require('./event');

const logger = module.exports = exports = {};

/**
 * Successful it will print console.log 
 * @param {string} data - Data to print to screen
 */
logger.log = (data) => {
  console.log(`${data} saved`);
};

/**
 * It console.logs errors when they occur
 * @param {string} file - '<file> not saved'
 */
logger.error = (file) => {
  console.error(`${file} not saved`);
};

events.on('log', logger.log);
events.on('error', logger.error);
