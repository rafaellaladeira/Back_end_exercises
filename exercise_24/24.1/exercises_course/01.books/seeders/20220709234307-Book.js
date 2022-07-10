'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Books', [{
       title: "Jurassic Park",
       author: "Michael Crichton",
       pageQuantity: 250,

     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})

  }
};
