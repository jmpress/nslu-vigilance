'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ulpdata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      submitted_by: {
        type: Sequelize.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
      },
      subsec1: {
        type: Sequelize.BOOLEAN
      },
      subsec2: {
        type: Sequelize.BOOLEAN
      },
      subsec3: {
        type: Sequelize.BOOLEAN
      },
      subsec4: {
        type: Sequelize.BOOLEAN
      },
      subsec5: {
        type: Sequelize.BOOLEAN
      },
      subsec6: {
        type: Sequelize.BOOLEAN
      },
      subsec7: {
        type: Sequelize.BOOLEAN
      },
      date_of_incident: {
        type: Sequelize.STRING
      },
      store_number: {
        type: Sequelize.INTEGER,
        references: {
          model: Store,
          key: 'id'
        },
      },
      staff_witnesses: {
        type: Sequelize.STRING
      },
      offending_manager: {
        type: Sequelize.STRING
      },
      incident_summary: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Ulpdata');
  }
};