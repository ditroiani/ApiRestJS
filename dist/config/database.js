"use strict";require('dotenv').config()

// Config connection for DB
module.exports = {
   dialect: 'mariadb',
   host: process.env.DATABASE_HOST,
   username: process.env.DATABASE_USERNAME,
   password: process.env.DATABASE_PASSWORD,
   database: process.env.DATABASE,
   define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      'createdAt': 'created_at',
      'updatedAt': 'updated_at'
   },
   dialectOptions: {
      timezone: 'America/Sao_paulo'
   },
   timezone: 'America/Sao_paulo'
}