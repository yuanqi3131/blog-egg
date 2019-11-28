'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("roles", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      create_time: DATE,
      descript: STRING(100)
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("roles");
  }
};
