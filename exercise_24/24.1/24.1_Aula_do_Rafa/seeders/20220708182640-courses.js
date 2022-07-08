'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [{
      name: "FullStack",
      description: "Formação de P. Dev Fullstack Junior",
      creation_date: "2019-06-01T00:00:00",
      active: true,
      duration: 12
  },
  {
    name: "Backend",
    description: "Formação de P. Dev BAck Junior",
    creation_date: "2019-06-01T00:00:00",
    active: true,
    duration: 7
},
{
  name: "Mobile",
  description: "Formação de P.mobile Junior",
  creation_date: "2023-06-01T00:00:00",
  active: false,
  duration: 7
},
])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
