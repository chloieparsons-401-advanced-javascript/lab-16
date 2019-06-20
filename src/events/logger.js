'use strict';

/**
 * @module logger
 */
const events = require('./event');

const logger = module.exports = exports = {};

/**
 * Successful it will print 
 * @param {string} data - Data to print to screen
 */
logger.log = (data) => {
  console.log(`${data} saved`);
};

/**
 * It console.logs errors when they occur
 * @param {string}
 */
logger.error = (file) => {
  console.error(`${file} not saved`);
};

events.on('log', logger.log);
events.on('error', logger.error);
