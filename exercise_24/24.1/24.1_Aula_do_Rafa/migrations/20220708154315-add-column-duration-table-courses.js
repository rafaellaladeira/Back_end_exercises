'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Courses', 'duration', {
      allowNull: false,
      type: Sequelize.INTEGER
    })
    },

  async down (queryInterface, Sequelize) {  // PRA QUANDO FIZER O MIGRATE:UNDO NO TERMINAL
    await queryInterface.removeColumn('Course', 'duration');
  }
};
