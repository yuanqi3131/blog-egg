'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Role = app.model.define('role', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    description: STRING(100),
    createTime: DATE,
  }, {
    timestamps: false//去除createAt updateAt
  });
  Role.associate = () => {
    app.model.Role.belongsToMany(app.model.User, {
      through: app.model.UserRole,
      foreignKey: 'roleId',
    });
    app.model.Role.belongsToMany(app.model.Menu,
      { through: app.model.RoleMenu, foreignKey: 'roleId', targetKey: 'id', constraints: false }
    )
  }
  Role.sync({ alter: true }) // 自动建表
  return Role;
};