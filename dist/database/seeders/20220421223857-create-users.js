"use strict";'use strict';
// Imports external
const bcryptjs = require('bcrypt')

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users',
      [
        {
          name: 'John Doe',
          email: 'john@gmail.com',
          password_hash: await bcryptjs.hash('112233', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Dalila Troiani',
          email: 'dalis@gmail.com',
          password_hash: await bcryptjs.hash('dalila123', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Jasmine Garcia',
          email: 'jasmine_g@gmail.com',
          password_hash: await bcryptjs.hash('jas23@min', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Sophie Marth',
          email: 'sophiem@gmail.com',
          password_hash: await bcryptjs.hash('sophie98', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Mel Oliveira',
          email: 'melzinha@gmail.com',
          password_hash: await bcryptjs.hash('r845sd4', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Adolfo Luiz',
          email: 'adolfol@gmail.com',
          password_hash: await bcryptjs.hash('adolfo@44sd', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Floyd Herbert',
          email: 'floydherbert11@gmail.com',
          password_hash: await bcryptjs.hash('floydh3fgd', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Psi Kandium',
          email: 'psikadm@gmail.com',
          password_hash: await bcryptjs.hash('psikanadian1@', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Paulo Divisi',
          email: 'paulinho_divi@gmail.com',
          password_hash: await bcryptjs.hash('pdivisi@878236', 8),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Marilu Chicken',
          email: 'maliruchk@gmail.com',
          password_hash: await bcryptjs.hash('mali97', 8),
          created_at: new Date(),
          updated_at: new Date()
        }
      ], {});

  },

  async down() { }
};
