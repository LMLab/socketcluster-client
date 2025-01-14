var SCClientSocket = require('./lib/scclientsocket');
var factory = require('./lib/factory');

module.exports.factory = factory;
module.exports.SCClientSocket = SCClientSocket;

module.exports.Emitter = require('component-emitter');

module.exports.create = function (options) {
  return factory.create(options);
};

module.exports.connect = module.exports.create;

module.exports.destroy = function (socket) {
  return factory.destroy(socket);
};

module.exports.clients = factory.clients;

module.exports.version = '13.1.0'
