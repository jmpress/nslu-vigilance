'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint('Admins', {
      type: 'FOREIGN KEY',
      fields: ['user_id'],
      name: 'fk_admins_user_id',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint('Admins','fk_admins_user_id');
  }
};
