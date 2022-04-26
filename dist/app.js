"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Imports external
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
require('dotenv/config');

// Imports internal
require('./database/index');
var _user = require('./routes/user'); var _user2 = _interopRequireDefault(_user);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);

class App {
   // Init app
   constructor() {
      this.app = _express2.default.call(void 0, )
      this.middlewares()
      this.routes()
   }

   // Middlewares
   middlewares() {
      this.app.use(_express2.default.urlencoded({ extended: true }))
      this.app.use(_express2.default.json())
      console.log('Loading Middewares...')
   }

   // Routes
   routes() {
      this.app.use('/user/', _user2.default)
      this.app.use('/tokens/', _token2.default)
      console.log('Loading Routes...')
   }
}

// Export app module
exports. default = new App().app