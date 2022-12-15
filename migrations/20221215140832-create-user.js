'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first - name: {
        type: Sequelize.STRING
      },
      last - name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      store - number: {
        type: Sequelize.INTEGER
      },
      email - verified: {
        type: Sequelize.BOOLEAN
      },
      steward: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};