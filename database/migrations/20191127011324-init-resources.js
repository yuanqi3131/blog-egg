'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('resources', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      aritcleId: INTEGER,
      userId: INTEGER,
      commentId: INTEGER,
      path: STRING(100),
      createTime: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('resources');
  }
};
