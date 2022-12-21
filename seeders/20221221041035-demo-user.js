'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
     await queryInterface.bulkInsert('Users', [{
      first_name: 'Filje',
      last_name: 'Knurssen',
      email: 'test@test.com',
      salted_hashed_pass: '$2b$10$k34Q1L6uooA8NwWWMSr3.eVibHsmlKlugq28vrKAuSgN1c919M9fC',
      store_number: 1,
      email_verified: false,
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:*/
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
