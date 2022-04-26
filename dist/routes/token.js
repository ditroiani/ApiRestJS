"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Imports external
var _express = require('express');

// Import internal
var _TokenController = require('../controllers/TokenController'); var _TokenController2 = _interopRequireDefault(_TokenController);

// Router handler
const router = new (0, _express.Router)()

// Routes
router.post('/', _TokenController2.default.store)

// Export router handler
exports. default = router