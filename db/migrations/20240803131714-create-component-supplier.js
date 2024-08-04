'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('componentSupplier', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      componentId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'component', // Name of the target model
          key: 'id',
        }
      },
      supplierId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'supplier', // Name of the target model
          key: 'id',
        }
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
    await queryInterface.dropTable('componentSupplier');
  }
};