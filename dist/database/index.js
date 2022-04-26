"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Imports external
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

// Imports internal
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

// Models
const models = [_User2.default]

// Connection
const connection = new (0, _sequelize2.default)(_database2.default)

// Init models
models.forEach(model => model.init(connection))
