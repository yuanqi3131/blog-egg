'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    await queryInterface.createTable('tags', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      create_time: DATE
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('tags');
  }
};