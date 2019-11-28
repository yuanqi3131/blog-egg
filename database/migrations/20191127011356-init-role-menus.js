'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable("role_menus", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      menu_id: INTEGER,
      role_id: INTEGER
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("role_menus");
  }
};
