var requireDirectory = require('require-directory');
module.exports = requireDirectory(module);

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    config = require('../configuration')
;

mongoose.connection.open(config.get('mongo:url'))
