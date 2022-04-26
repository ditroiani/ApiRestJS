"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Import external
var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcrypt = require('bcrypt'); var _bcrypt2 = _interopRequireDefault(_bcrypt);

// Export class
 class User extends _sequelize.Model {
   static init(sequelize) {
      // Creating model attributes and passing connection
      super.init({
         name: {
            type: _sequelize2.default.STRING,
            defaultValue: '',
            validate: {
               len: {
                  args: [3, 255],
                  msg: 'Name field cannot be empty'
               }
            }
         },
         email: {
            type: _sequelize2.default.STRING,
            defaultValue: '',
            unique: {
               msg: 'Email already exists'
            },
            validate: {
               isEmail: {
                  msg: 'Invalid email'
               }
            }
         },
         password_hash: {
            type: _sequelize2.default.STRING,
            defaultValue: ''
         },
         password: {
            type: _sequelize2.default.VIRTUAL,
            defaultValue: '',
            validate: {
               len: {
                  args: [6, 50],
                  msg: 'Password must be between 6 and 50 characters'
               }
            }
         }
      }, {
         // Connection
         sequelize
      })

      // Adding hashed password before sequelize
      this.addHook('beforeSave', async (user) => {
         // Check password input
         if (user.password) {
            // Hash password
            user.password_hash = await _bcrypt2.default.hash(user.password, 8)
         }
      })
      return this
   }

   // Check password
   passwordIsValid(password) {
      // Return value of compare passwords
      return _bcrypt2.default.compare(password, this.password_hash)
   }
} exports.default = User;