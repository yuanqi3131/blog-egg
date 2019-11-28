'use strict';
let util = require("util")
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Menu = app.model.define('menu', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    parentId: INTEGER,
    href: STRING(100),
    descript: STRING(300),
    createTime: DATE
  }, {
    timestamps: false//去除createAt updateAt
  });
  Menu.associate = () => { // 表间关系
    app.model.Menu.belongsToMany(app.model.Role, {
      through: app.model.RoleMenu,
      targetKey: 'id',
      foreignKey: 'menuId',
      constraints: false
    })
  }
  Menu.sync({ alter: true }) // 自动建表
  return Menu;
};