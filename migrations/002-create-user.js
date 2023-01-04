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
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      salted_hashed_pass: {
        type: Sequelize.STRING
      },
      store_number: {
        type: Sequelize.INTEGER,
        validate: {
          isNumeric: true,
          min: 1
        }
      },
      email_verified: {
        defaultValue: false,
        type: Sequelize.BOOLEAN
      },
      role: {
        defaultValue: 'member',
        type: Sequelize.ENUM('member', 'steward', 'admin')
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