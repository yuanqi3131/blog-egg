'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable("user_roles", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      user_id: INTEGER,
      role_id: INTEGER
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("user_roles");
  }
};
