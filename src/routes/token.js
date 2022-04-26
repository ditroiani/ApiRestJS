// Imports external
import { Router } from 'express'

// Import internal
import tokenController from '../controllers/TokenController'

// Router handler
const router = new Router()

// Routes
router.post('/', tokenController.store)

// Export router handler
export default router