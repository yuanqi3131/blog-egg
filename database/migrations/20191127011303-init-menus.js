'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, } = Sequelize;
    await queryInterface.createTable("menus", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      name: STRING(30),
      parent_id: INTEGER,
      href: STRING(100),
      descript: STRING(100),
      create_time: DATE
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("menus");
  }
};
