'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint('Stewards', {
      type: 'FOREIGN KEY',
      fields: ['store_number'],
      name: 'fk_stewards_user_id',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint('Users','fk_stewards_user_id');
  }
};
