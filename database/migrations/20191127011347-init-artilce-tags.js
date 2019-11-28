'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER } = Sequelize;
    await queryInterface.createTable("article_tags", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      articleId: INTEGER,
      tagId: INTEGER
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable("article_tags");
  }
};
