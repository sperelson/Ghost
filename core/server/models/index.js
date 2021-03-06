/**
 * Dependencies
 */

var _ = require('lodash'),
    exports,
    models;

// enable event listeners
require('./base/listeners');

/**
 * Expose all models
 */
exports = module.exports;

models = [
    'accesstoken',
    'app-field',
    'app-setting',
    'app',
    'client-trusted-domain',
    'client',
    'permission',
    'post',
    'refreshtoken',
    'role',
    'settings',
    'subscriber',
    'tag',
    'user'
];

function init() {
    exports.Base = require('./base');

    models.forEach(function (name) {
        _.extend(exports, require('./' + name));
    });
}

/**
 * Expose `init`
 */

exports.init = init;
