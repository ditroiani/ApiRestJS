// Imports external
import { Router } from 'express'

// Imports internal
import userController from '../controllers/UserController'
import loginRequired from '../middlewares/loginRequired'

// Router handler
const router = new Router()

// Routes
router.post('/', userController.store)
router.get('/', loginRequired, userController.index)
router.get('/:id', loginRequired, userController.show)
router.put('/', loginRequired, userController.update)
router.delete('/', loginRequired, userController.delete)

// Export router handler
export default router