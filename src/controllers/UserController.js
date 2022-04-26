// Imports internal
import User from '../models/User'

class UserController {
   // Store
   async store(req, res) {
      try {
         const newUser = await User.create(req.body)
         const { name, email, password } = newUser
         return res.send({ name, email })
      } catch (error) {
         return res.status(400).json({
            errors: error.errors.map((err) => err.message)
         })
      }
   }

   // Index
   async index(req, res) {
      try {
         const users = await User.findAll({
            attributes: ['id', 'name', 'email']
         })
         res.json(users)
      } catch (error) {
         return res.status(400).json({
            errors: error.errors.map((err) => err.message)
         })
      }
   }

   // Get index
   async show(req, res) {
      try {
         // Find user
         const user = await User.findByPk(req.params.id, {
            attributes: ['id', 'name', 'email', 'created_at']
         })

         // Verify user
         if (!user) {
            return res.status(400).json({
               errors: "User not found"
            })
         }

         res.json(user)
      } catch (error) {
         return res.status(400).json({
            errors: error.errors.map((err) => err.message)
         })
      }
   }

   // Update
   async update(req, res) {
      try {
         // Find user in request
         const user = await User.findByPk(req.userId)

         // Verify user
         if (!user) {
            return res.status(400).json({
               errors: "User not found"
            })
         }

         // Update user
         const updatedUser = await user.update(req.body)

         const { name, email } = updatedUser
         res.json({ name, email })
      } catch (error) {
         return res.status(400).json({
            errors: error.errors.map((err) => err.message)
         })
      }
   }

   // Delete
   async delete(req, res) {
      try {
         // Find user in request
         const user = await User.findByPk(req.userId)

         // Verify user
         if (!user) {
            return res.status(400).json({
               errors: "User not found"
            })
         }

         // Delete user
         await user.destroy()

         return res.json({
            msg: "User delete"
         })
      } catch (error) {
         return res.status(400).json({
            errors: error.errors.map((err) => err.message)
         })
      }
   }
}

export default new UserController
