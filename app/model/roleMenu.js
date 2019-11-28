'use strict'

module.exports = app => {
  const { INTEGER } = app.Sequelize;
  const roleMenu = app.model.define('roleMenu', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    menuId: INTEGER,
    roleId: INTEGER
  }, {
    timestamps: false
  })
  roleMenu.sync({ alter: true });
  return roleMenu
}
