// Imports external
import express from 'express'
import 'dotenv/config'

// Imports internal
import './database/index'
import useRoutes from './routes/user'
import tokenRoutes from './routes/token'

class App {
   // Init app
   constructor() {
      this.app = express()
      this.middlewares()
      this.routes()
   }

   // Middlewares
   middlewares() {
      this.app.use(express.urlencoded({ extended: true }))
      this.app.use(express.json())
      console.log('Loading Middewares...')
   }

   // Routes
   routes() {
      this.app.use('/user/', useRoutes)
      this.app.use('/tokens/', tokenRoutes)
      console.log('Loading Routes...')
   }
}

// Export app module
export default new App().app