// Imports external
import jwt from 'jsonwebtoken'

// Imports internal
import User from '../models/User'

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
      const user = await User.findOne({ where: { email } })

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
      const token = jwt.sign({ id, email, password }, process.env.TOKEN_SECRET, {
         expiresIn: process.env.TOKEN_EXPIRATION
      })

      res.json({ email, token })
   }
}

export default new TokenController