'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint('Ulpdata', {
      type: 'FOREIGN KEY',
      fields: ['submitted_by'],
      name: 'fk_ulpdata_user_id',
      references: {
        table: 'Users',
        field: 'id'
      },
      onDelete: 'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint('Users','fk_ulpdata_user_id');
  }
};
