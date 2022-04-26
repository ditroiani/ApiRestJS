// Imports external
import Sequelize from 'sequelize'

// Imports internal
import dbConfig from '../config/database'
import User from '../models/User'

// Models
const models = [User]

// Connection
const connection = new Sequelize(dbConfig)

// Init models
models.forEach(model => model.init(connection))
