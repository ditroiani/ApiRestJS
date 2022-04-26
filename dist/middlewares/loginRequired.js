"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Imports external
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

// Imports internal
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

// Export password verification
exports. default = async (req, res, next) => {
   // Get authorizarion
   const { authorization } = req.headers

   // Check authorization
   if (!authorization) {
      return res.status(401).json({
         errors: "Login required"
      })
   }

   // Separate values
   const [text, token] = authorization.split(' ')

   try {
      // Checking token
      const data = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET)
      const { id, email } = data

      // Find user by id and email
      const user = await _User2.default.findOne({
         where: {
            id,
            email
         }
      })

      // Verify user
      if (!user) {
         return res.status(401).json({
            errors: "Invalid user"
         })
      }

      // Assign values to req
      req.userId = id
      req.userEmail = email

      return next()
   } catch (error) {
      return res.status(401).json({
         errors: "Expired or invalid Token"
      })
   }
}