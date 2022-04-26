// Import external
import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcrypt'

// Export class
export default class User extends Model {
   static init(sequelize) {
      // Creating model attributes and passing connection
      super.init({
         name: {
            type: Sequelize.STRING,
            defaultValue: '',
            validate: {
               len: {
                  args: [3, 255],
                  msg: 'Name field cannot be empty'
               }
            }
         },
         email: {
            type: Sequelize.STRING,
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
            type: Sequelize.STRING,
            defaultValue: ''
         },
         password: {
            type: Sequelize.VIRTUAL,
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
            user.password_hash = await bcrypt.hash(user.password, 8)
         }
      })
      return this
   }

   // Check password
   passwordIsValid(password) {
      // Return value of compare passwords
      return bcrypt.compare(password, this.password_hash)
   }
}