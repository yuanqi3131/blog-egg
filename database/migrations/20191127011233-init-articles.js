'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("articles", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      title: STRING(100),
      tag_id: INTEGER,
      user_id: INTEGER,
      content: STRING(10000),
      is_top: INTEGER,
      create_time: DATE
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("articles");
  }
};
