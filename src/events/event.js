'use strict';

/** @module myEventEmitter  */

const eventEmitter = require('events').eventEmitter;

class myEventEmitter extends eventEmitter {}

const events = new myEventEmitter();

module.exports = events;