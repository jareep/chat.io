'use strict';
var logger = require('bristol');
logger.addTarget('file', {file: 'debug.log'}).withFormatter('human');

module.exports = logger;