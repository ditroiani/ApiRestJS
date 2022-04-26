// Imports external
import jwt from 'jsonwebtoken'

// Imports internal
import User from '../models/User'

// Export password verification
export default async (req, res, next) => {
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
      const data = jwt.verify(token, process.env.TOKEN_SECRET)
      const { id, email } = data

      // Find user by id and email
      const user = await User.findOne({
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