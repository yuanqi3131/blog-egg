'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(30),
    password: STRING(100),
    email: STRING(30),
    createTime: DATE,
    loginTime: DATE
  }, {
    timestamps: false//去除createAt updateAt
  });
  User.associate = () => {
    app.model.User.hasMany(app.model.Article, {
      foreignKey: 'userId',
      sourceKey: 'id',
      constraints: false
    });
    app.model.User.hasMany(app.model.Resource, {
      foreignKey: 'userId',
      targetKey: 'id',
      constraints: false
    })
    app.model.User.belongsToMany(app.model.Role, {
      through: app.model.UserRole,
      foreignKey: 'userId',
    })
  }
  User.sync({ alter: true }) // 自动建表
  return User;
};