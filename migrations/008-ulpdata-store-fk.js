'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.addConstraint('Ulpdata', {
      type: 'FOREIGN KEY',
      fields: ['store_number'],
      name: 'fk_ulpdata_store_number',
      references: {
        table: 'Stores',
        field: 'id'
      },
      onDelete: 'SET NULL'
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeConstraint('Ulpdata','fk_ulpdata_store_number');
  }
};
