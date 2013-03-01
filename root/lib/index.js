// Load modules

var Hoek = require('hoek');


// Declare internals

var internals = {};


exports.register = function (pack, options, next) {

    {% if (route_permission !== 'n') { %}Hoek.assert(typeof pack.route === 'function', 'Plugin permissions must allow route');{% } %}
    {% if (state_permission !== 'n') { %}Hoek.assert(typeof pack.state === 'function', 'Plugin permissions must allow state');{% } %}
    {% if (helper_permission !== 'n') { %}Hoek.assert(typeof pack.helper === 'function', 'Plugin permissions must allow helper');{% } %}
    {% if (events_permission !== 'n') { %}Hoek.assert(typeof pack.state === 'function', 'Plugin permissions must allow events');{% } %}
    {% if (ext_permission !== 'n') { %}Hoek.assert(typeof pack.state === 'function', 'Plugin permissions must allow ext');{% } %}

    options = options || {};

    // Set any plugin dependent api properties here
    pack.api({ });

    next();
};