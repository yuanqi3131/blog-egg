'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('users', {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: STRING(30),
      password: STRING(130),
      email: STRING(30),
      avatar: STRING(100),
      create_time: DATE,
      login_time: DATE,
    });
  },

  down: async queryInterface => {
    await queryInterface.dropTable('users');
  }
};
