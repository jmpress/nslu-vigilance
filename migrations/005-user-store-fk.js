'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint('Users', {
      type: 'FOREIGN KEY',
      fields: ['store_number'],
      name: 'fk_users_store_number',
      references: {
        table: 'Stores',
        field: 'id'
      },
      onDelete: 'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint('Users','fk_users_store_number');
  }
};
