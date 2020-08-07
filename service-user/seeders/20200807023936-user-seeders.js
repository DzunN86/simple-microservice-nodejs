'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: "Dzun",
        profession: "Admin Micro",
        role: "admin",
        email: "nurroinz@gmail.com",
        password: await bcrypt.hash('dzun123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Agus",
        profession: "Front end Developer",
        role: "student",
        email: "agus@gmail.com",
        password: await bcrypt.hash('agus123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {

     await queryInterface.bulkDelete('users', null, {});
     
  }
};
