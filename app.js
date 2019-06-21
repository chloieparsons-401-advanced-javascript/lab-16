'use strict';

const promisifyFS = require('./src/promisifyFS');
const toUpper = require('./src/toUpper');
const eventLog = require('./src/events/event');
require('./src/events/logger');

/**
 * Opens the text file and saves it to uppercase
 * @param {string} file 
 */

const alterFile = (file) => {
  promisifyFS.readFile( file) 
    .then(data => {
      data = toUpper(data);
      promisifyFS.writeFile(file, data);
    })
    .then(eventLog.emit('log', file))
    .catch(error => {
      eventLog.emit('error', error);
    });
};

let file = process.argv.slice(2).shift();
alterFile(file);
