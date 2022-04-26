"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Imports external
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

// Imports internal
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class TokenController {
   async store(req, res) {
      const { email = '', password = '' } = req.body

      // Check email and password
      if (!email || !password) {
         return res.status(400).json({
            errors: "Invalid credentials"
         })
      }

      // Find user by email
      const user = await _User2.default.findOne({ where: { email } })

      // Check user
      if (!user) {
         return res.status(400).json({
            errors: "User not found"
         })
      }

      // Check password
      if (!(await user.passwordIsValid(password))) {
         return res.status(401).json({
            errors: "Password invalid"
         })
      }

      // Genereting token
      const { id } = user
      const token = _jsonwebtoken2.default.sign({ id, email, password }, process.env.TOKEN_SECRET, {
         expiresIn: process.env.TOKEN_EXPIRATION
      })

      res.json({ email, token })
   }
}

exports. default = new TokenController