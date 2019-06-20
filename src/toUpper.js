'use strict';

/**
 * Turns buffer into uppercase string
 * @module toUpper
 * @param {Buffer}
 */

 module.exports = (data) => {
   data = Buffer.from(data);
   return data.toString().toUpperCase();
 };