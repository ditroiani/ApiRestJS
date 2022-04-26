"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Import internal
var _app = require('./app'); var _app2 = _interopRequireDefault(_app);

// Port
const port = process.env.APP_PORT

// Listen port
_app2.default.listen(port)